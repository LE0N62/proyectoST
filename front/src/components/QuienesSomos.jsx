import "../Styles/QuienesSomos.css";

function QuienesSomos() {
    return (
        <div className="quienes-container">
            <h1>¿Quiénes somos?</h1>
            <p className="creador">Creador de Corporación MISAC S.A. de C.V.: <strong>Sergio Flores</strong></p>
            <p className="empresa-info">
                <strong>Salvaje Tentación</strong> es una empresa 100% mexicana con más de 20 años de experiencia en el mercado de ropa y calzado para toda la familia.
                Contamos con más de 4,000 artículos en existencia y más de 40 sucursales en distintas ciudades.
            </p>
            <h2>Nuestras sucursales:</h2>
            <ul className="sucursales">
                <li>CDMX</li>
                <li>Edo. de México</li>
                <li>Querétaro</li>
                <li>Toluca</li>
                <li>Hidalgo</li>
                <li>Puebla</li>
                <li>Michoacán</li>
                <li>Tlaxcala</li>
                <li>Morelos</li>
                <li>Veracruz</li>
            </ul>
            <p className="empresa-info">
                Buscamos llegar a cada estado del país. Ahora también nos encuentras en línea. ¡Te esperamos en <strong>Salvaje Tentación</strong>!
            </p>
            <footer className="footer">© 2024 Mi Sitio Web. Todos los derechos reservados.</footer>
        </div>
    );
}

export default QuienesSomos;
