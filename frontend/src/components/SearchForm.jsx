import { useState } from "react";
import { buscarCanciones } from "../services/musicServices";
import {
    SearchCard, FormTitle, FormDescription, Form, Label, Input, SubmitButton, ErrorMessage, Results,
    ResultsHeader, Span, ResultsTitle, SongGrid, SongCard, SongName
} from "../styles/SearchForm"

function SearchForm() {

    const [letrasIngresadas, setLetrasIngresadas] = useState("")
    const [artista, setArtista] = useState("")
    const [msjError, setMsjError] = useState("")
    const [resultadoBusqueda, setResultadoBusqueda] = useState(null)

    function manejarEnvio(e) {
        e.preventDefault();
        enviar_datos();
    }

    const cancionesPrueba = [
        "Red Lights",
        "Love Stay",
        "Star",
        "Easy",
        "Thunderous",
        "Levanter",
        "Mixtape"
    ];

    async function enviar_datos() {

        if (letrasIngresadas.trim() === "" || artista.trim() === "") {
            setMsjError("Completa ambos campos")
            return;
        }
        setMsjError("");

        try {
            const datos = await buscarCanciones(letrasIngresadas, artista)

            setResultadoBusqueda(datos)
            setLetrasIngresadas("")
            setArtista("")

        } catch (error) {
            console.error("Error", error)
            setMsjError("Ocurrió un error al buscar canciones, porfavor intente nuevamente")
        }
    }

    return (
        <>
        <SearchCard>
            <Form onSubmit={manejarEnvio}>
                <FormTitle>Busca tus canciones favoritas</FormTitle>
                <FormDescription>
                    Encuentra las canciones que estás buscando con nuestras letras y artistas.
                </FormDescription>
                <Label htmlFor="letras">Letras Disponibles:</Label>
                <Input
                    type="text"
                    id="letras"
                    placeholder="Ingresá tus letras..."
                    value={letrasIngresadas}
                    onChange={(e) => setLetrasIngresadas(e.target.value)}
                    required
                />

                <Label htmlFor="artista">Artista:</Label>
                <Input
                    type="text"
                    id="artista"
                    placeholder="Ingresá el nombre del artista..."
                    value={artista}
                    onChange={(e) => setArtista(e.target.value)}
                    required
                />

                <SubmitButton type="submit">Buscar canciones</SubmitButton>
            </Form>

            {msjError && <ErrorMessage>{msjError}</ErrorMessage>}

        </SearchCard>
        {resultadoBusqueda && (
                <Results>
                    <ResultsHeader>
                        <Span>
                            YOUR SONG COLLECTION
                        </Span>

                        <ResultsTitle>
                            Songs you can make ✨
                        </ResultsTitle>

                        <p>
                            Canciones de {resultadoBusqueda.artista} que podés crear con tus letras.
                        </p>
                    </ResultsHeader>

                    <SongGrid>
                        {cancionesPrueba.map((cancion, index) => (
                            <SongCard key={`${cancion}-${index}`}>
                                <SongName>{cancion}</SongName>
                            </SongCard>
                        ))}
                    </SongGrid>
                </Results>
            )}
        </>
    );

}

export default SearchForm;