import Navbar from "../components/Navbar";
import FooterContent from "../components/Footer";
import { PageContainer, PageContent } from "../styles/Inspiracion";

function InspiracionPage() {
    return (
        <PageContainer>
            <Navbar />

            <PageContent>
                <h1>¡Página en proceso!</h1>
                <p>Próximamente vas a encontrar acá inspiraciones para tus freebies.</p>
            </PageContent>

            <FooterContent />
        </PageContainer>
    );
}

export default InspiracionPage;