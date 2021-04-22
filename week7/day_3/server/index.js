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

app.get('/read_todolist/:id', async (req,res) => {
        
    try {
        const { id } = req.params //checks url
        const readToDoById = await pool.query("SELECT * FROM todo WHERE todo_id = ($1)",[id])
        
        res.json(readToDoById)
    } 
    catch(err) {
        console.log(err.message)
    }
})

//update todo item
app.put('/update_todolist/:id', async (req,res) => {
    try {
        const { id } = req.params
        const { description } = req.body
        const updateToDoById =  await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]
        )
        res.json(`updated todo item with id: ${id}`)
    } catch(err) {
        console.log(err)
    }
})

//delete todo item
app.delete('/delete_todo/:id', async (req,res) => {
    
    try{
    const {id} = req.params
    const deleteToDoById = await pool.query(
        "DELETE FROM todo WHERE todo_id = $1", [id]
    )
    res.json(`deleted todo item with id: ${id}`)
    } catch (err) {
        console.log(err)
    }
})

app.get('/', (req,res) => {
    res.send('Welcome to node server root route')
});

app.listen(PORT, () => {
    console.log('running on port ' + PORT)
})