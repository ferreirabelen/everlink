import Navbar from "../components/Navbar";
import SearchForm from "../components/SearchForm";
import FooterContent from "../components/Footer";
import {Main, Hero, Eyebrow, Title, Highlight, Description} from "../styles/Home"
function Home() {
    return (
        <>
            <Navbar />
            <Main>
                <Hero>
                    <Eyebrow>DE UNA FAN, PARA FANS</Eyebrow>
                    <Title>Tus letras <Highlight> Tus canciones.</Highlight></Title>
                    <Description>
                        Encontrá canciones que podés crear con las letras
                        de tus cuentas. ¡Conectá con otros fans!
                    </Description>
                </Hero>

                <SearchForm />
            </Main>
            <FooterContent />
        </>
    );
}


export default Home;