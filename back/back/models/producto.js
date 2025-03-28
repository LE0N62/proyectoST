const db = require("../config/db");

class Producto {
  static getAll(callback) {
    db.query("SELECT * FROM producto", callback);
  }

  static getById(id, callback) {
    db.query("SELECT * FROM producto WHERE id_producto = ?", [id], callback);
  }
}

module.exports = Producto;
