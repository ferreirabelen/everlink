import {Nav, Logo, Links, NavLink} from "../styles/Navbar"

function Navbar(){
    return (
        <Nav aria-label="Navegación principal">
            <Logo href="/">everlink</Logo>
            <Links>
                <NavLink href="/">Inicio</NavLink>
                <NavLink href="/">Guardado</NavLink>
            </Links>
        </Nav>
    )
}

export default Navbar