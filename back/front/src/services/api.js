// src/services/api.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/productos"; // Asegúrate de que la URL sea correcta

export const getProductos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    return [];
  }
};
