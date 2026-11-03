import { useState } from "react";
import { buscarCanciones } from "../services/musicServices";
import {
    SearchCard, FormTitle, FormDescription, Form, Label, Input, SubmitButton, ErrorMessage, Results,
    ResultsHeader, Span, ResultsTitle, SongGrid, SongCard, SongName, ResultsCount, EmptyState, SongCardTop, SongSticker,
    SongNumber, SongCardBottom, SongArtist, FavoriteIcon
} from "../styles/SearchForm"

function SearchForm() {

    const [letrasIngresadas, setLetrasIngresadas] = useState("")
    const [msjError, setMsjError] = useState("")
    const [resultadoBusqueda, setResultadoBusqueda] = useState(null)
    const [loading, setLoading] = useState(false)

    function manejarEnvio(e) {
        e.preventDefault();
        enviar_datos();
    }


    async function enviar_datos() {


        if (letrasIngresadas.trim() === "") {
            setMsjError("Ingresa las letras disponibles")
            return;
        }

        setMsjError("");
        setLoading(true);

        try {
            const datos = await buscarCanciones(letrasIngresadas)

            setResultadoBusqueda(datos)
            setLetrasIngresadas("")

        } catch (error) {
            console.error("Error", error)
            setMsjError("Ocurrió un error al buscar canciones, porfavor intente nuevamente")

        } finally {
            setLoading(false)
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


                    <SubmitButton type="submit" disabled={loading}>
                        {loading ? "Buscando..." : "Buscar canciones"}
                    </SubmitButton>

                </Form>

                {msjError && <ErrorMessage>{msjError}</ErrorMessage>}

            </SearchCard>

            {resultadoBusqueda && (
                <Results>
                    <ResultsHeader>
                        <Span>YOUR SONG COLLECTION</Span>

                        <ResultsTitle>
                            Songs you can make ✨
                        </ResultsTitle>

                        <p>
                            Canciones de {resultadoBusqueda.artista} que podés crear con tus letras.
                        </p>

                        <ResultsCount>
                            {resultadoBusqueda.cantidad_resultados} canciones encontradas
                        </ResultsCount>
                    </ResultsHeader>

                    {resultadoBusqueda.canciones.length > 0 ? (


                        <SongGrid>
                            {resultadoBusqueda.canciones.map((cancion, index) => (
                                <SongCard key={`${cancion}-${index}`}>
                                    <SongCardTop>
                                        <SongSticker>
                                            {["✿", "✧", "♡", "☼", "✦"][index % 5]}
                                        </SongSticker>

                                        <SongNumber>
                                            {String(index + 1).padStart(2, "0")}
                                        </SongNumber>
                                    </SongCardTop>

                                    <SongName>{cancion}</SongName>

                                    <SongCardBottom>
                                        <SongArtist>
                                            {resultadoBusqueda.artista.toLowerCase()}
                                        </SongArtist>

                                        <FavoriteIcon>♡</FavoriteIcon>
                                    </SongCardBottom>
                                </SongCard>
                            ))}
                        </SongGrid>


                    ) : (
                        <EmptyState>
                            <h3>¡Todavía no encontramos tu canción!</h3>
                            <p>
                                Probá con otra combinación de letras.
                                ¡Quizás tu próxima canción favorita está a un par de letras de distancia!
                            </p>
                        </EmptyState>
                    )}
                </Results>
            )}

        </>
    );

}

export default SearchForm;