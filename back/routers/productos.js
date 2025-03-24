const express = require("express");
const router = express.Router();
const Producto = require("../models/producto");

// Obtener todos los productos
router.get("/", (req, res) => {
  Producto.getAll((err, results) => {
    if (err) {
      res.status(500).json({ error: "Error al obtener los productos" });
    } else {
      res.json(results);
    }
  });
});

// Obtener producto por ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Producto.getById(id, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error al obtener el producto" });
    } else if (results.length === 0) {
      res.status(404).json({ error: "Producto no encontrado" });
    } else {
      res.json(results[0]);
    }
  });
});

module.exports = router;
