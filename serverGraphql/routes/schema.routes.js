;
'use strinc'

const express = require('express');

let api = express.Router(),
    schemaController = require('../config/configSchema');

api.use('/', schemaController);

module.exports = api;