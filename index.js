const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const City = require('./model.js');
const uri = process.env.MONGODB_URI;

mongoose.connect('mongodb+srv://*****:***********@cluster0.ertuix8.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true}).then(res=>{
    console.log("Connection Established !! ");
}).catch(err=>{
    console.log(err);
})
app.get("/",(req,res)=>{
    res.send("This API gives the weather information of 30 Cities")
})
app.get("/weather",async (req,res)=>{
    const {page=1,limit=30} = req.query;
    let dataRecieved = await City.find().limit(limit*1).skip(((page-1)*limit))
    res.status(200).json(dataRecieved);
})
app.listen(port,()=>{
    console.log("Listening on Port 3000");
})
