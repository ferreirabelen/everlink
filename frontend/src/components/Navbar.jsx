import {Nav, Logo, Links, NavLink, MenuButton, MobileMenu} from "../styles/Navbar"
import { useState } from "react"

function Navbar(){

    const [menuAbierto, setMenuAbierto] = useState(false);
    
    function cerrarMenu(){
        setMenuAbierto(false);
    }

    function alternarMenu(){
        setMenuAbierto((estadoAnterior) => !estadoAnterior);
    }


    return (
        <Nav aria-label="Navegación principal">
            <Logo to="/" onClick={cerrarMenu}>
            everlink
            </Logo>

            <Links>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/favoritos">Favoritos</NavLink>
                <NavLink to="/inspiracion">Inspiración</NavLink>
            </Links>

              {/* Botón hamburguesa mobile */}
            <MenuButton
                type="button"
                onClick={alternarMenu}
                aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuAbierto}
                aria-controls="mobile-menu"
                $abierto={menuAbierto}
            >
                <span />
                <span />
                <span />
            </MenuButton>

             {/* Menú desplegable mobile */}
            {menuAbierto && (
                <MobileMenu id="mobile-menu">
                    <NavLink to="/" onClick={cerrarMenu}>
                        Inicio
                    </NavLink>

                    <NavLink to="/favoritos" onClick={cerrarMenu}>
                        Favoritos
                    </NavLink>
                    <NavLink to="/inspiracion" onClick={cerrarMenu}>
                        Inspiración
                    </NavLink>
                </MobileMenu>
            )}
        </Nav>
    )
}

export default Navbar