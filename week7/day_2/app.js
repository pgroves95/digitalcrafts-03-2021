const express = require('express')
const app = express()
const PORT = 3000;

app.get('/', (req,res) =>{
    res.send("I'm here at root.")
})

app.listen(PORT, (req,res) => {
    console.log('Server is running')
})