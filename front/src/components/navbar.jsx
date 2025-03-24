import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Importamos los estilos
function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">Inicio</Link>
            <Link to="/quienes-somos">Quiénes somos</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/ubicacion">Ubicación</Link>
            <Link to="/curriculum">Currículum</Link>
            <Link to="/iniciar-sesion">Iniciar sesión</Link>
        </nav>
    );
}

export default Navbar;
