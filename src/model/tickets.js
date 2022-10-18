 const mongoose = require("mongoose");
//import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    
    ticketNo: {
        type: Number,
        required: true,
        // unique: false
   },
    travelBtwCities :{
    type: String,
     required: true
    },
    flightTimings:{
        type: Number,
        required: true
    }, 


   });

   const Ticket = mongoose.model('Ticket',ticketSchema)
   module.exports = Ticket;