const API_URL = import.meta.env.VITE_API_URL;

export async function buscarCanciones(letras) {
    const respuesta = await fetch(`${API_URL}/api/buscar`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            letras: letras
        })
    });

    if (!respuesta.ok) {
        throw new Error("Error al buscar canciones");
    }

    const datos = await respuesta.json();
    return datos;
}

export async function recibir_info() {
    const respuesta = await fetch(`${API_URL}/api/info`);

    if (!respuesta.ok) {
        throw new Error("No se pudo obtener la información");
    }

    const datos = await respuesta.json();
    return datos;
}
