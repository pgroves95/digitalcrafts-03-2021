const express = require('express')
const app = express()
const address = "127.0.0.1"
const PORT = 3000

app.get('/', (req,res) => {
    res.end("Hello")
})

app.get('/b', (req,res) => {
    res.end("Hello from b")
})

app.listen(PORT, address, () => {
    console.log("server is running.")
})