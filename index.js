'use strict';

const express = require('express');
const app = express();
const dotenv = require('dotenv').config();


async function startServer (){


    app.listen(process.env.PORT, () => {
        console.log(`server listening on ${process.env.PORT}`)
    })
}
startServer();
