//server
const express = require('express')
const app = express()
const cors = require('cors')
const mustacheExpress = require('mustache-express')
const path = require('path')

//sass
// const sass = require('sass')
// const sassSync = sass.renderSync({file: 'styles.scss'})

//db
const pgp = require('pg-promise')()
const PORT = 3000
const CONN_STRING = 'groves://localhost:5432/wk8d1'
const db = pgp(CONN_STRING)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const VIEWS_PATH = path.join(__dirname, '/views')

// configuring view engine
app.engine('mustache',mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views',VIEWS_PATH)
app.set('view engine','mustache')

//create
app.get('/create-todo',(req,res) => {
    res.render('create-todo')
})
//read
app.get('/read-todos',(req,res) => {
    res.render('read-todos')
})
//update
app.get('/update-todos',(req,res) => {
    res.render('update-todos')
})
//delete
app.get('/delete-todos',(req,res) => {
    res.render('delete-todos')
})


app.listen(PORT, (req,res) => {
    console.log(`server running on port ${PORT}`)
})