const express = require('express')
const app = express()
const mus = require('mustache-express')
const cors = require('cors')
const pgp = require('pg-promise')()
const PORT = 3000
const CONN_STR = "groves://localhost:5432/wk7d4"
const db = pgp(CONN_STR)

app.use(cors())
app.use(express.urlencoded({extended: false}))

app.engine('mustache', mus())
app.set('views','./views')
app.set('view engine','mustache')

//create products
app.get('/create_product', (req,res) => {
    res.render('create_product')
})

app.post('/create_product', async (req,res) => {
    try{
        const { prodName } = req.body
        const { quantity } = req.body

        await db.oneOrNone('SELECT id FROM demo WHERE productname = $1',[prodName])
        .then((product) => {
            if(product) {
                //render interpolated message "product already exists"
                res.render('create_product',{message: "That product name already exists"})
            } else {
                //insert, render message "product has been added to the database"
                db.none('INSERT INTO demo(productname, quantity) VALUES($1,$2)',[prodName, quantity])
                res.render('create_product', {message:"Thank you! The product has been added."})
            }
        })
    } catch(err) {
        console.log(err)
    }
})

//read all the products

app.get('/list_products', async (req,res) => {
    try {
       await db.any('SELECT * FROM demo')
       .then((list) => {
           const displayList = []
           list.forEach((product) => {
            displayList.push({ product: `ID: ${product.id} | name: ${product.productname} | quantity: ${product.quantity}`})
           })
           res.render('list_products', {message: displayList})
       })

    } catch(err) {
        console.log(err)
    }
})

//read one product by using id
app.get('/find_product', (req,res) => {
    res.render('find_product')
})

app.post('/find_product', async (req,res) => {
    const {search} = req.body
    try {
        await db.oneOrNone('SELECT * FROM demo WHERE id = $1',[search])
        .then((product) => {
            if(product) {
                displayProduct = `ID: ${product.id} | name: ${product.productname} | quantity: ${product.quantity}`
                res.render(`find_product`, {message: displayProduct})
            } else {
                res.render(`find_product`, {message:"The specified product does not exist."})
            }
        })
        } catch(err) {
         console.log(err)
     }
})

//update a product quantity
app.get('/update_product', (req,res) => {
    res.render('update_product')
})

app.post('/update_product', async (req,res) => {

    try{
        const { id } = req.body
        const { quantity } = req.body

        await db.none('UPDATE demo SET quantity = $1 WHERE id = $2',[quantity, id])
        .then(() => {
                res.render('update_product',{message: `The specified product was updated with new quantity: ${quantity}`})
            })
        .catch((err) => {
            console.log(err)
            res.render('update_product', {message:"The specified product does not exist."})
        })
    } catch(err) {
        console.log(err)
    }
})

//delete a product
app.get('/delete_product', (req,res) => {
    res.render('delete_product')
})

app.post('/delete_product', async (req,res) => {
    try{
        const { prodName } = req.body

        await db.oneOrNone('SELECT id FROM demo WHERE productname = $1',[prodName])
        .then((product) => {
            if(product) {
                db.none('DELETE FROM demo WHERE productname = $1',[prodName])
                res.render('delete_product',{message: `The "${prodName}" product has been deleted from the database`})
            } else {
                //insert, render message "product has been added to the database"
                res.render('delete_product', {message:`"${prodName}" is not a product in the database.`})
            }
        })
    } catch(err) {
        console.log(err)
    }
})


app.listen(PORT, (req,res) => {
    console.log(`server running on port ${PORT}`)
})