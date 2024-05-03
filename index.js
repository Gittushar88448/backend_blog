const express = require('express');
const app = express();
const blogRouter = require('./routes/blog');
require('dotenv').config();

const PORT = process.env.PORT || 4000;

// middleware -> used to read json format
app.use(express.json());

// mounting
app.use("/api/v1" , blogRouter);

// creating db connection
const dbConnect = require('./config/dbConnect');
dbConnect();


app.listen( PORT, ()=>{
    console.log(`connection established at port ${PORT}`)
})

app.get('/' , (req ,res)=>{
    res.send(`<h1> Hello buddy </h1>`);
})