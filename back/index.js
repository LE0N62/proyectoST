const express = require("express");
const cors = require("cors");
require("dotenv").config();
const productosRouter = require("./routers/productos");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/productos", productosRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
