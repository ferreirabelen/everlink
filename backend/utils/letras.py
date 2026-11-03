from collections import Counter



def formar_titulo(letras_disponibles, titulo):
    letras_disponibles = letras_disponibles.upper()
    titulo = titulo.upper()
    letras_usuario = Counter(letras_disponibles)
    letras_cancion = Counter(titulo)

    for letra, cantidad in letras_cancion.items():
        if letras_usuario[letra] < cantidad:
            return False

    return True
