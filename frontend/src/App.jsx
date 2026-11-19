import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FavoritosPage from "./pages/Favoritos";
import InspiracionPage from "./pages/Inspiracion";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favoritos" element={<FavoritosPage />} />
                <Route path="/inspiracion" element={<InspiracionPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
