from data.database import obtener_canciones
from utils.letras import formar_titulo


def buscar_canciones(letras_disponibles, artista_id):

    canciones = obtener_canciones(artista_id)
    resultados = []

    for cancion in canciones:
        titulo = cancion["titulo"]

        if formar_titulo(letras_disponibles,titulo):
            resultados.append(titulo)

    return resultados