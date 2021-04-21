const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3002;
const pool = require("./db")

app.use(express.json());
app.use(cors());


//create todo item
app.post('/todo', async (req,res) => {
    try {
        const {description} = req.body
        const newToDoItem = await pool.query("INSERT INTO todo (description) VALUES($1)", [description])
        console.log(req.body)
        res.json(newToDoItem)
    } catch(err) {
        console.log(err.message)
    }
})
//read todo list
app.get('/read_todolist/', async (req,res) => {
    try {

        const readToDoList = await pool.query("SELECT * FROM todo")
        
        res.json(readToDoList)
    } 
    catch(err) {
        console.log(err.message)
    }
})

//update todo item

//delete todo item

app.get('/', (req,res) => {
    res.send('Welcome to node server root route')
});

app.listen(PORT, () => {
    console.log('running on port ' + PORT)
})