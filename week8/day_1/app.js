const express = require('express')
const app = express()
const cors = require('cors')
const pgp = require('pg-promise')()
const PORT = 3000;
const CONN_STRING = "groves://localhost:5432/wk8d1"

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
const db = pgp(CONN_STRING)

app.post('/create', (req,res) => {
    const { username } = req.body
    const { favoritecolor } = req.body
    try{
        db.none('INSERT INTO test_table(username, favoritecolor) VALUES($1, $2)', [username, favoritecolor])
        .then(() => {
            res.send("successful insert")
        })
    } catch (err) {
        console.log(err)
    }
})

app.get('/read', (req,res) => {
    try{
        db.any('SELECT id, username, favoritecolor FROM test_table')
        .then((data) => {
            res.send(data)
        })
    } catch (err) {
        console.log(err)
    }
})

app.get('/read/:id', (req,res) => {
    const { id } = req.params
    try{
        db.oneOrNone('SELECT username,favoritecolor FROM test_table WHERE id = $1', [id])
        .then((data) => {
            res.send(data)
        })
    } catch (err) {
        console.log(err)
    }
})

app.post('/update/:id', (req,res) => {
    const { id } = req.params
    const { favoritecolor } = req.body
    try{
        db.none('UPDATE test_table SET favoritecolor = $1 WHERE id = $2',[favoritecolor, id])
        .then(() => {
            res.send('successful update')
        })
    } catch (err) {
        console.log(err)
    }
})

app.post('/delete/:id', (req,res) => {
    const { id } = req.params
    try{
        db.none('DELETE from test_table WHERE id = $1', [id])
        .then(() => {
            res.send("successful deletion")
        })
    } catch (err) {
        console.log(err)
    }
})





app.listen(PORT, (req, res) => {
    console.log(`server running on port: ${PORT}`)
})