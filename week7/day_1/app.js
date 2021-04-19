const express = require('express')
const app = express()
const address = "127.0.0.1"
const PORT = 3000
// const fs = require('fs')
const {readFile} = require('fs')
// destructuring allows access to values inside of modules like functions, classes etc.

app.get('/', (req,res) => {
    readFile('./index.html', 'utf-8', (err,data) => {
        if(err){
            res.send("doesn't exist")
        }
        res.send(data)
    })
})

app.get('/b', (req,res) => {
    res.end("Hello from b")
})

app.listen(PORT, address, () => {
    console.log("server is running.")
})