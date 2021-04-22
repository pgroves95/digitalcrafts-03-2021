const Pool = require('pg').Pool

const pool = new Pool({
    user: "groves",
    password: "",
    host: "localhost",
    port: 5432,
    database: "todolist2"
})

module.exports = pool;
