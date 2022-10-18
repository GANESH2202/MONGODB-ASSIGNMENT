const express = require("express");

const Flight = require("./src/model/flights");
const Ticket = require('./src/model/tickets');

const app=express();
// const mongoose = require("mongoose");
app.use(express.json());
//app.use(app);
 
const port =  process.env.PORT  || 3000;

require("./src/db/connection");
  
app.listen(port,()=>{
   console.log("server us up on running",port);
})
 
module.exports=app;