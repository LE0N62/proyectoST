import "../styles/Home.css"; // Importamos los estilos
import Productos from "../components/Productos"; // Importamos el componente Productos

function Home() {
    return (
        <div className="home-container">
            {/* Sección del Logo y Nombre de la Empresa */}
            <header className="home-header">
                <img src="../public/img/logo.jpg" alt="Logo de la Empresa" className="logo" />
                <h1>Salvaje Tentacion</h1>
            </header>

            {/* Sección de Productos (usamos el componente Productos aquí) */}
            <section className="productos">
                <Productos /> {/* Aquí se insertan los productos */}
            </section>
        </div>
    );
}
export default Home;