const promiseQuery = require('../config/db.js');

// Controlador de usuarios
const obtenerTodos = async (req, res) => {
    try {
        const query = "SELECT nombre_audio, tipo_meditacion FROM audios";
    
        const audios = await promiseQuery(query)
        
        res.json(audios);
      } catch (error) {
        throw err
      }
}

const obtenerPorTipo = async (req, res) => {
    try {
        const tipo = req.params.tipo
        const query = "SELECT nombre_audio, tipo_meditacion FROM audios where tipo_meditacion = ?";
    
        const audios = await promiseQuery(query, [tipo])
        
        res.json(audios);
      } catch (error) {
        throw err
      }
}

module.exports = {
    obtenerTodos,
    obtenerPorTipo
}