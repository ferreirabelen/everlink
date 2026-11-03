import json

from data.database import (
    crear_tablas,
    insertar_artista,
    cargar_catalogo,
    obtener_conexion
)

from data.catalogo import ARTISTA_ACTUAL


crear_tablas()

insertar_artista(
    ARTISTA_ACTUAL["nombre"],
    ARTISTA_ACTUAL["mbid"]
)

with open("catalogo_temporal.json", "r", encoding="utf-8") as archivo:
    datos = json.load(archivo)

catalogo = datos["canciones"]

conexion = obtener_conexion()

artista = conexion.execute("""
    SELECT id FROM artists
    WHERE mbid = ?
""", (ARTISTA_ACTUAL["mbid"],)).fetchone()

conexion.close()

cargar_catalogo(artista["id"], catalogo)

conexion = obtener_conexion()

cantidad_canciones = conexion.execute(
    "SELECT COUNT(*) FROM songs"
).fetchone()[0]

cantidad_grabaciones = conexion.execute(
    "SELECT COUNT(*) FROM recordings"
).fetchone()[0]

print("Canciones guardadas:", cantidad_canciones)
print("Grabaciones guardadas:", cantidad_grabaciones)

conexion.close()