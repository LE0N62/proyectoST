// controllers/userController.js
import User from "../models/user.js"; // Asegúrate de que la ruta sea correcta

// Función para registrar un nuevo cliente
export const registrarCliente = async (req, res) => {
    try {
        const { nombre_completo, email, telefono, direccion, ciudad, pais } = req.body;

        // Verificar si el correo ya está registrado
        const clienteExistente = await User.findOne({ where: { email } });
        if (clienteExistente) {
            return res.status(400).json({ mensaje: "El correo ya está registrado" });
        }

        // Crear un nuevo cliente
        const nuevoCliente = await User.create({
            nombre_completo,
            email,
            telefono,
            direccion,
            ciudad,
            pais
        });

        res.status(201).json({ mensaje: "Cliente registrado exitosamente", cliente: nuevoCliente });
    } catch (error) {
        res.status(500).json({ mensaje: "Error en el servidor", error });
    }
};
