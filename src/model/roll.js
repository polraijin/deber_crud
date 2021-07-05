const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const rol = Schema ({
    nombre: String,

    permisos: [{ type: Schema.ObjectId, ref: "permiso" }]
});

module.exports = mongoose.model('rol', rol);