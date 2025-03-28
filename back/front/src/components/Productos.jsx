// src/Components/Productos.jsx
import { useEffect, useState } from "react";
import { getProductos } from "../services/api";
import "../Styles/Productos.css"; // Estilo del componente

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Cargar los productos al montar el componente
    getProductos().then(setProductos);
  }, []);

  return (
    <div className="productos-container">
      <h1>Productos</h1>
      <div className="productos-list">
        {productos.map((producto) => (
          <div key={producto.id_producto} className="producto-card">
            <img
              src={producto.imagen_url}
              alt={producto.nombre}
              className="producto-img"
            />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <span className="producto-precio">${producto.precio}</span>
            <span className="producto-categoria">{producto.categoria}</span>
            <span className="producto-stock">Stock: {producto.stock}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
