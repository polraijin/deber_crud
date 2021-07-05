const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const permiso = Schema ({
    nombre: String


});
module.exports = mongoose.model('permiso', permiso);