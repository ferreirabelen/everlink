export async function buscarCanciones(letras, artista) {

  const respuesta = await fetch("http://127.0.0.1:5000/api/buscar", {
    method: "POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      letras: letras,
      artista: artista
    })
  })

  if (!respuesta.ok) {
    throw new Error("Error al enviar datos");
  }
  
  const datos = await respuesta.json();
  return datos;
}

export async function recibir_info() {

  const respuesta = await fetch("http://127.0.0.1:5000/api/info")
  if (!respuesta.ok) {
    throw new Error("No se pudo obtener la información");
  }
  const datos = await respuesta.json();
  return datos;
}
