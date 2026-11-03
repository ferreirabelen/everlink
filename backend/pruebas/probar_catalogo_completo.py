
import json
import os

from services.musicbrainz import (
    buscar_release_groups,
    buscar_ediciones_release_group,
    extraer_canciones_unicas,
    seleccionar_titulo
)
from data.catalogo import ARTISTA_ACTUAL


# Archivo donde guardaremos el avance del catálogo.
ARCHIVO_CATALOGO = "catalogo_temporal.json"


# 1. Recuperamos el progreso anterior, si existe.
if os.path.exists(ARCHIVO_CATALOGO):

    with open(ARCHIVO_CATALOGO, "r", encoding="utf-8") as archivo:
        datos_guardados = json.load(archivo)

    catalogo = datos_guardados["canciones"]
    procesados = set(datos_guardados["procesados"])

    print(f"Catálogo recuperado: {len(catalogo)} canciones")
    print(f"Release groups ya procesados: {len(procesados)}")

else:
    catalogo = {}
    procesados = set()


# 2. Recuperamos todos los lanzamientos del artista.
grupos = buscar_release_groups(ARTISTA_ACTUAL["mbid"])

print(f"\nRelease groups encontrados: {len(grupos)}")


# 3. Procesamos cada lanzamiento.
for indice, grupo in enumerate(grupos, start=1):

    mbid_grupo = grupo["id"]

    # Si ya fue procesado, lo salteamos.
    if mbid_grupo in procesados:
        print(f"Saltando {indice}/{len(grupos)}: {grupo['title']}")
        continue

    print(f"Procesando {indice}/{len(grupos)}: {grupo['title']}")

    # Recuperamos todas las ediciones del lanzamiento.
    ediciones = buscar_ediciones_release_group(mbid_grupo)

    # Extraemos las grabaciones sin duplicados dentro del lanzamiento.
    canciones = extraer_canciones_unicas(ediciones)

    for cancion in canciones:

        recording_id = cancion["recording_id"]

        titulo = seleccionar_titulo(
            cancion["titulos"],
            recording_id
        )

        if not titulo:
            continue

        # Evitamos repetir una misma grabación en el catálogo.
        if recording_id not in catalogo:
            catalogo[recording_id] = titulo

    # 4. Marcamos el lanzamiento como procesado.
    procesados.add(mbid_grupo)

    # 5. Guardamos el progreso después de cada lanzamiento.
    with open(ARCHIVO_CATALOGO, "w", encoding="utf-8") as archivo:

        json.dump(
            {
                "canciones": catalogo,
                "procesados": list(procesados)
            },
            archivo,
            ensure_ascii=False,
            indent=4
        )

    print(f"Guardado. Canciones acumuladas: {len(catalogo)}")


# 6. Mostramos el resultado final.
print("\n--- RESULTADO DEL CATÁLOGO ---")
print("Release groups procesados:", len(procesados))
print("Canciones únicas:", len(catalogo))

for titulo in sorted(catalogo.values()):
    print(titulo)
