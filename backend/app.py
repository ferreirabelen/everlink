
from flask import Flask, request
from flask_cors import CORS
from data.catalogo import ARTISTA_ACTUAL
from data.database import obtener_conexion
from services.buscador import buscar_canciones
from services.musicbrainz import (
    buscar_release_groups,
    buscar_ediciones_release_group,
    extraer_canciones_unicas,
    seleccionar_titulo
)


# Creamos nuestra aplicación Flask
app = Flask(__name__)
CORS(app)


# Definimos nuestra primera ruta
@app.route("/")
def inicio():
    return "¡Bienvenido a Everlink!"


@app.route("/sobre-everlink")
def sobreEverlink():
    return "Pagina de fan, hecha para fans n.n"

@app.route("/my-saved-items")
def guardados():
    return "mis canciones guardadas: "

@app.route("/api/info")
def obtener_info():
    return {
        "proyecto": "nombre oficial: everlink",
        "mensaje" : "conectando fans",
        "estado" : "en desarrollo"
    }


@app.route("/api/buscar", methods=["POST"])
def buscar():
    datos = request.get_json()

    if not datos:
        return {"error": "No se recibieron datos"}, 400

    letras = datos.get("letras")

    if not letras or not letras.strip():
        return {"error": "ingresa las letras disponibles"}, 400

    conexion = obtener_conexion()

    artista = conexion.execute("""
        SELECT id
        FROM artists
        WHERE mbid = ?
    """, (ARTISTA_ACTUAL["mbid"],)).fetchone()

    conexion.close()

    if artista is None:
        return {"error": "artista no encontrado"}, 400

    resultados = buscar_canciones(letras, artista["id"])

    return {
        "artista": ARTISTA_ACTUAL["nombre"],
        "letras_recibidas": letras,
        "cantidad_resultados": len(resultados),
        "canciones": resultados
    }


@app.route("/api/artista")
def obtener_artista():
    return {
        "nombre": ARTISTA_ACTUAL["nombre"],
        "mbid": ARTISTA_ACTUAL["mbid"]
    }



@app.route("/api/canciones")
def obtener_canciones():
    return {
        "nombre": ARTISTA_ACTUAL["nombre"],
        "mbid": ARTISTA_ACTUAL["mbid"]
    }
if __name__ == "__main__":
    app.run(debug=True)
