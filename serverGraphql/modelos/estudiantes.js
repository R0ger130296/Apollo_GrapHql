;
'use strict'
const mongoose = require('mongoose');
const { Schema } = mongoose;

const estudianteModel = new Schema({
    nombre: { type: String },
    email: { type: String },
});

module.exports = mongoose.model('estudiantes', estudianteModel);