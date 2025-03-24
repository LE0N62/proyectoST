import "../styles/Home.css"; // Importamos los estilos

function Home() {
    return (
        <div className="home-container">
            {/* Sección del Logo y Nombre de la Empresa */}
            <header className="home-header">
                <img src="/logo.png" alt="Logo de la Empresa" className="logo" />
                <h1>Salvaje Tentacion</h1>
            </header>

            {/* Sección de Productos */}
            <section className="productos">
                <h2>Productos Destacados</h2>
                <div className="productos-grid">
                    <div className="producto">
                        <img src="/producto1.jpg" alt="Producto 1" />
                        <p>Producto 1</p>
                    </div>
                    <div className="producto">
                        <img src="/producto2.jpg" alt="Producto 2" />
                        <p>Producto 2</p>
                    </div>
                    <div className="producto">
                        <img src="/producto3.jpg" alt="Producto 3" />
                        <p>Producto 3</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
