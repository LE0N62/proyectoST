import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import QuienesSomos from "./components/QuienesSomos"; // Importamos el componente QuienesSomos
import Productos from "./components/Productos"; // Importamos el componente Productos
import Map from "./components/Map";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/productos" element={<Productos />} /> {/* Ruta de Productos */}
        <Route path="/ubicacion" element={<h1><Map/></h1>} />
        <Route path="/curriculum" element={<h1>Currículum</h1>} />
        <Route path="/iniciar-sesion" element={<h1>Iniciar sesión</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
