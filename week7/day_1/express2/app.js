const express = require("express")
const app = express()
const PORT = 3000
const { readFile } = require("fs")

app.use(express.json())


app.get('/', (req,res) => {
    res.send("Welcome to my page.")
})

app.get('/home', (req,res) => {
    readFile("./html/home.html", "utf-8", (err, data) => {
        res.send(data)
    })
})

app.get('/faq', (req,res) => {
    readFile("./html/faq.html", "utf-8", (err, data) => {
        res.send(data)
    })
})

app.get('/about', (req,res) => {
    readFile("./html/about.html", "utf-8", (err, data) => {
        res.send(data)
    })
})

app.get('/messages', (req, res) => {
    readFile("./html/messages.html", "utf-8", (err, data) => {
        res.send(data)
    })
})

app.get("*", (req, res) => {
    readFile("./html/unfound.html", "utf-8", (err, data) => {
        res.send(data)
    })
})

app.post("/messages", (req,res) => {
    console.log(req)
    const {logo, name} = req.body
    res.send({logo,name})

})


app.listen(PORT, (req,res) => {
    console.log(`Server is running on port ${PORT}`)
})