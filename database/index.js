"use strict";

const {Pool, Client} = require('pg');
 require('dotenv').config()


const pool = new Pool({
 user: 'postgres',
  host: 'localhost',
  database: 'ecommerce',
  password: 'postgres',
  port: 5432

});



module.exports = {
    query:(text,params) => pool.query(text,params),
    
}

console.log(pool.query())