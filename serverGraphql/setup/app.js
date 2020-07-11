'use strict'

const express = require('express'),
    connectDb = require('../config/db'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    cors = require('cors'),
    parseurl = require('parseurl')

let app = express(),
    session = require('express-session'),
    gqlRuta = require('../routes/schema.routes'),
    db = connectDb(),
    sess = {
        secret: process.env.KEY_SESSION,
        resave: false,
        saveUninitialized: true,
        name: 'sessionID',
        cookie: {
            httpOnly: false,
            maxAge: parseInt(process.env.TIEMPO)
        }
    },
    corsOptions = {
        origin: 'http://localhost:4200',
        optionsSuccessStatus: 200
    }
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// cors despues del body - parser
app.use(cors(corsOptions));
// consiguracion del sessions
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());

app.use("/gql", gqlRuta);


module.exports = app;