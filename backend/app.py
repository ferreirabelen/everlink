
from flask import Flask, request
from flask_cors import CORS


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

    letras = datos.get("letras")
    artista = datos.get("artista")

    return{
        "letras_recibidas" : letras,
        "artista": artista,
        "mensaje" : "FLASK recibió tus datos correctamente!"
    }




if __name__ == "__main__":
    app.run(debug=True)
