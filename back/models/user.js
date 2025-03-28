import { DataTypes } from "sequelize";
import db from "../config/db.js"; // Importamos la configuración de la base de datos

const User = db.define("cliente", {
    id_cliente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_completo: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    telefono: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    direccion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    ciudad: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    pais: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    fecha_registro: {
        type: DataTypes.TIMESTAMP,
        defaultValue: DataTypes.NOW
    }
});

export default User;
