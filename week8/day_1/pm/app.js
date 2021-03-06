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

//json/urlencoded
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//psql dynamic list interpolate function
const pgListInterpolater = (list) =>{
    let pgString = ''
    for(i=1; i<list.length; i++){
        pgString += `$${i},`
    }
    noTrail = pgString.slice(0,(pgString.length-1))
    return noTrail
}

//create
app.get('/create-todo',(req,res) => {
    res.render('create-todo')
})

app.post('/create-todo', (req,res) => {
    console.log(req.body)
    const { taskname } = req.body
    try {
        db.none('INSERT INTO todo (taskname,completed) VALUES($1,$2)', [taskname, 'false'])
        res.redirect('read-todos')
    } catch(err) {
        console.log(err)
    }
})
//read
app.get('/read-todos',(req,res) => {
    try {
        db.any('SELECT taskname, completed FROM todo')
        .then((data) => {
            let incompleteArray = []
            let completedArray = []

            for(task of data) {
                if(task.completed === false) {
                    incompleteArray.push(task.taskname)
                } else {
                    completedArray.push(task.taskname)
                }
            }
            console.log(incompleteArray)
            console.log(completedArray)
            res.render('read-todos', {incomplete: incompleteArray, complete: completedArray})
        })
    } catch(err) {
        console.log(err)
    }
})
//update
app.get('/update-todos',(req,res) => {
    try {
        db.any('SELECT taskname, completed FROM todo WHERE completed = false')
        .then((data) => {

            let incompleteArray = []
            for(task of data) {
                incompleteArray.push(task.taskname)
            }
            
            res.render('update-todos', {incomplete: incompleteArray})
        })
    } catch(err) {
        console.log(err)
    }
    })

app.post('/update-todos', (req,res) => {
    console.log(req.body.task)
    updateList = []
    for(item of req.body.task){
        updateList.push(item)
    }
    console.log(updateList)
    try{
        db.any('SELECT * FROM todo')
        .then((data) =>{
            console.log(data)
            res.render('update-todos')
        })
    } catch(err) {
        console.log(err)
    }
})
//delete
app.get('/delete-todos',(req,res) => {
    try {
        db.any('SELECT taskname, completed FROM todo')
        .then((data) => {
            let incompleteArray = []
            let completedArray = []

            for(task of data) {
                if(task.completed === false) {
                    incompleteArray.push(task.taskname)
                } else {
                    completedArray.push(task.taskname)
                }
            }
            console.log(incompleteArray)
            console.log(completedArray)
            res.render('read-todos', {incomplete: incompleteArray, complete: completedArray})
        })
    } catch(err) {
        console.log(err)
    }

})

app.post('/delete-todos', (req,res) => {

})

app.listen(PORT, (req,res) => {
    console.log(`server running on port ${PORT}`)
})