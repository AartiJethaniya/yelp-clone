const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const db = require('./db')
require('dotenv').config();
const app = express();
app.use(cors())

// middleware
app.use(express.json())

const port = process.env.PORT || 3001;

//get all restaurants
app.get('/api/v1/restaurants', async (req, res) => {
    try {

        const results = await db.query("SELECT * FROM restaurants")

        console.log(results)
        res.status(200).json({
            status: 'success',
            results: results.rows.length,
            data: {
                restaurants: results.rows,
            }
        })
    } catch (err) {
        console.log(err)
    }
})

//get a restaurant

app.get('/api/v1/restaurants/:id', async (req, res) => {
    try {
        // console.log(req.params.id);
        const results = await db.query("SELECT * FROM restaurants WHERE id = $1",[req.params.id])
        // console.log(results)
        res.status(200).json({
            status: 'success',
            data: {
                restaurants: results.rows[0],
            },
        })
        // console.log(results.rows[0])
    } catch (err) {
        console.log(err)
    }
    
})

//create a restaurant

app.post('/api/v1/restaurants', async (req, res) => {
    console.log(req.body);
    try {
        // console.log(req.params.id);
        const results = await db.query("INSERT INTO restaurants(name,location,price_range) VALUES ($1,$2,$3) returning *",[req.body.name,req.body.location,req.body.price_range])
        // console.log(results)
        res.status(200).json({
            status: 'success',
            data: {
                restaurants: results.rows[0],
            },
        })
        // console.log(results.rows[0])
    } catch (err) {
        console.log(err)
    }
})

//update restaurants
app.put('/api/v1/restaurants/:id', async(req, res) => {
    try{
        const results = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",[req.body.name,req.body.location,req.body.price_range,req.params.id] )
        console.log(results);
        res.status(200).json({
            status:'success',
            data:{
                restaurnats: results.rows[0],
            }
        })
    }catch(err){
        console.log(err);
    }
})

//Delete Restaurants

app.delete('/api/v1/restaurants/:id', async (req, res) => {
    try{
        const results = await db.query('DELETE FROM restaurants WHERE id = $1',[req.params.id])
        res.status(204).json({
            status : 'success'
        })
    }catch(err){
        console.log(err)
    }
})
app.listen(port, () => [
    console.log(`server is starting on port ${port}`)
])