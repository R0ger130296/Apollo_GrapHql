;
'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;

const cursoModel = new Schema({
    titulo: { type: String },
    profesor: { type: String },
    descripcion: { type: String },
    genero: { type: String },
});

module.exports = mongoose.model('cursos', cursoModel);