const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const mongoose = require('mongoose');

const userroutes=require("./routes/userroutes")
const locationroutes=require("./routes/location_routes")
const proutes= require('./routes/paymentroutes');

const server=express();


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/musafir');
  console.log("db connected");
  
}

env.config();
server.use(cors());
server.use(express.json());
server.use('/users',userroutes.routes);
server.use('/locations',locationroutes.routes);
server.use('/payment',proutes.routes);


server.listen(8080,()=>
{
    console.log("server started");
})