import {Nav, Logo, Links, NavLink} from "../styles/Navbar"
import {Link} from "react-router-dom"

function Navbar(){
    return (
        <Nav aria-label="Navegación principal">
            <Logo href="/">everlink</Logo>
            <Links>
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/favoritos">Favoritos</NavLink>
                <NavLink to="/inspiracion">Inspiración</NavLink>
            </Links>
        </Nav>
    )
}

export default Navbar