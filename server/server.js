const express = require('express')
const morgan = require('morgan');
require('dotenv').config();
const app = express();

// middleware
app.use(express.json())

const port = process.env.PORT || 3001;

//get all restaurants
app.get('/api/v1/restaurants', (req,res)=>{
    console.log("retrive all the restaurants")
    res.status(200).json({
        status : 'success',
        data : {
            restaurants : ['McDonalds','StarBuks']
        }
    })
})

//get a restaurant

app.get('/api/v1/restaurants/:id',(req,res) =>{
    console.log(req.params);   
    res.status(200).json({
        status : 'success',
        data : {
            restaurants : 'Mcdonalds'
        }
    })
})

//create a restaurant

app.post('/api/v1/restaurants',(req,res) =>{
    console.log(req.body );
    res.status(201).json({
        status : 'success',
        data : {
            restaurants : 'Mcdonalds'
        }
    })
})

//update restauratn
app.put('/api/v1/restaurants/:id', (req,res)=>{
    console.log(req.params.id)
    console.log(req.body)
    res.status(201).json({
        status : 'success',
        data : {
            restaurants : 'Mcdonalds'
        }
    })
})

//Delete Restauratn

app.delete('/api/v1/restaurants/:id',(req,res)=>{
    res.status(204).json(
        {
            status: 'success'
        },
    )
})
app.listen(port, ()=>[
    console.log(`server is starting on port ${port}`)
])