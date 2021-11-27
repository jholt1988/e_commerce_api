'use strict';

const {Pool} = require('pg');


const pool = new Pool({
 user: process.env.PGUSER,
  host: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT

});






module.exports = {
    query:(text,params) => pool.query(text,params),
    
}