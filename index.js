'use strict';

const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const loaders = require('./loaders')

async function startServer (){

// Init application loaders
     loaders(app);
    app.listen(process.env.PORT, () => {
        console.log(`server listening on ${process.env.PORT}`)
    })
}
startServer();



