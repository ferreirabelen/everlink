import requests
import re
import unicodedata
from data.titulos_personalizados import TITULOS_PERSONALIZADOS
import time
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

BASE_URL = "https://musicbrainz.org/ws/2"

sesion = requests.Session()

reintentos = Retry(
    total=3,
    backoff_factor=2,
    status_forcelist=[429, 500, 502, 503, 504],
    allowed_methods=["GET"]
)

adaptador = HTTPAdapter(max_retries=reintentos)
sesion.mount("https://", adaptador)


def buscar_release_groups(mbid_artista):

    url = f"{BASE_URL}/release-group/"

    headers = {
        "User-Agent": "Everlink/0.1.0 (https://github.com/ferreirabelen/everlink)"
    }

    todos_los_grupos = []
    limite = 100
    offset = 0
    total = None

    while total is None or offset < total:

        parametros = {
            "artist": mbid_artista,
            "fmt": "json",
            "limit": limite,
            "offset": offset
        }

        respuesta = sesion.get(
            url,
            params=parametros,
            headers=headers,
            timeout=(5, 30)
        )

        respuesta.raise_for_status()

        time.sleep(1)

        datos = respuesta.json()

        grupos = datos.get("release-groups", [])
        total = datos.get("release-group-count", 0)

        todos_los_grupos.extend(grupos)

        offset += len(grupos)

        if not grupos:
            break

    return todos_los_grupos


def buscar_ediciones_release_group(mbid_release_group):

    url = f"{BASE_URL}/release/"

    headers = {
        "User-Agent": "Everlink/0.1.0 (https://github.com/ferreirabelen/everlink)"
    }

    todas_las_ediciones = []
    limite = 100
    offset = 0
    total = None

    while total is None or offset < total:

        parametros = {
            "release-group": mbid_release_group,
            "fmt": "json",
            "limit": limite,
            "offset": offset,
            "inc": "recordings"
        }

        respuesta = sesion.get(
            url,
            params=parametros,
            headers=headers,
            timeout=(5, 30)
            
        )

        respuesta.raise_for_status()

        time.sleep(1)

        datos = respuesta.json()

        ediciones = datos.get("releases", [])
        total = datos.get("release-count", 0)

        todas_las_ediciones.extend(ediciones)

        offset += len(ediciones)

        if not ediciones:
            break

    return todas_las_ediciones



def extraer_canciones_unicas(ediciones):
    canciones = {}

    for edicion in ediciones:
        for medio in edicion.get("media", []):
            for track in medio.get("tracks", []):

                recording = track.get("recording", {})
                recording_id = recording.get("id")
                titulo = track.get("title")

                if not recording_id or not titulo:
                    continue

                if recording_id not in canciones:
                    canciones[recording_id] = {
                        "recording_id": recording_id,
                        "titulos": []
                    }

                if titulo not in canciones[recording_id]["titulos"]:
                    canciones[recording_id]["titulos"].append(titulo)

    return list(canciones.values())


def es_titulo_latino(titulo):
    letras = [caracter for caracter in titulo if caracter.isalpha()]

    return (
        bool(letras)
        and all(
            unicodedata.name(letra, "").startswith("LATIN")
            for letra in letras
        )
    )


def seleccionar_titulo(titulos, recording_id):
    candidatos = []

    for titulo in titulos:

        # Quitamos aclaraciones o créditos entre paréntesis.
        titulo_limpio = re.sub(
            r"\s*[\(\[（].*?[\)\]）]\s*",
            "",
            titulo
        ).strip()

        if es_titulo_latino(titulo_limpio):
            candidatos.append(titulo_limpio)

        else:
            # Si el título original no está en alfabeto latino,
            # buscamos un posible nombre en inglés entre paréntesis.
            nombres_alternativos = re.findall(
                r"[\(\[（](.*?)[\)\]）]",
                titulo
            )

            for nombre in nombres_alternativos:
                nombre = nombre.strip()

                if es_titulo_latino(nombre):
                    candidatos.append(nombre)

    if not candidatos:
        return TITULOS_PERSONALIZADOS.get(recording_id)

    # Preferimos el nombre más corto y limpio.
    candidatos_unicos = {}

    for candidato in candidatos:
        clave = normalizar_titulo(candidato)

        if clave not in candidatos_unicos:
            candidatos_unicos[clave] = candidato

    return min(candidatos_unicos.values(), key=len)

def normalizar_titulo(titulo):
    return titulo.casefold().strip()