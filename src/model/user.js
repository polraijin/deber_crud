const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const usuario = Schema ({
    primer_nombre: String,
    segundo_nombre: String,
    primer_apellido: String,
    segundo_apellido: String,
    codigo_axceso: String,
    contraseña: String,
    roles: [{ type: Schema.ObjectId, ref: "rol" }],
    usuario_nuevo: {
        type: Boolean,
        default: false
      }
    

});
module.exports = mongoose.model('usuario', usuario);