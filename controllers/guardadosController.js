const promiseQuery = require('../config/db.js');

// Controlador de usuarios
const obtener = async (req, res) => {
    try {
        const id = req.params.id ;
        const query = "SELECT * FROM guardados where id_usuario = ?";
    
        const guardados = await promiseQuery(query, [id])
        
        res.json(guardados);
      } catch (error) {
        throw err
      }
}

module.exports = {
    obtener
}