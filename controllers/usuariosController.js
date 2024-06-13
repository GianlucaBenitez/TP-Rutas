const promiseQuery = require('../config/db.js');

// Controlador de usuarios
const menu = async (req, res) => {
    try {
      res.send("Menu de Usuarios");
    } catch (error) {
      throw err
    }
}

const configuracion = async (req, res) => {
    try {
      res.send("Menú de configuraciones");
    } catch (error) {
      throw err
    }
}

const ayuda = async (req, res) => {
    try {
      res.send("Menú de ayuda");
    } catch (error) {
      throw err
    }
}

const obtener = async (req, res) => {
    try {
      const id = req.params.id;
      const query = "SELECT * FROM usuarios WHERE id_usuario = ?";
  
      const usuario = await promiseQuery(query, [id])
      
      res.json(usuario);
    } catch (error) {
      throw err
    }
}

module.exports = {
    menu,
    obtener,
    configuracion,
    ayuda
}