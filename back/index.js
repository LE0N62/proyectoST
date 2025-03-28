const express = require("express");
const cors = require("cors");
require("dotenv").config();
const productosRouter = require("./routers/productos");
const usersRouter = require("./routers/users"); // Importamos las rutas de usuario
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/productos", productosRouter); // Ruta para productos
app.use("/api/users", usersRouter); // Nueva ruta para los usuarios

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
