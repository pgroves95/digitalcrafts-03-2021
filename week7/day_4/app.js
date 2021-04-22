const express = require('express')
const app = express()
const mus = require('mustache-express')
const cors = require('cors')
const pgp = require('pg-promise')()

const PORT = 3000
const CONN_STR = "localhost:5432/groves/wk7d4"


app.listen(PORT, (req,res) => {
    console.log(`server running on port ${PORT}`)
})