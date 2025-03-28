import React from "react";
import "../styles/Map.css"; // Importa los estilos del mapa

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d332.49074954393774!2d-99.23914933161798!3d19.468349813688754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d203ac054573a3%3A0x311b50fe485d7b32!2sSalvaje%20Tentaci%C3%B3n%20CEDIS!5e0!3m2!1ses!2smx!4v1743121278835!5m2!1ses!2smx"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
