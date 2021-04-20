const express = require('express')
const app = express()
const PORT = 3000;
app.use(express.json())

app.get('/', (req,res) =>{
    res.send("I'm here at root.")
})

app.get('/about', (req,res) =>{
    res.send("I'm here at about.")
})

app.get('/faq', (req,res) =>{
    res.send("I'm here at FAQ.")
})

app.get('/team', (req, res) => {
    res.send('team page')
})

app.post('/team', (req,res) =>{
    console.log(req.body.name)
})

app.listen(PORT, (req,res) => {
    console.log('Server is running')
})