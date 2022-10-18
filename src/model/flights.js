const mongoose = require("mongoose");
//import mongoose from "mongoose";

const flightSchema =new mongoose.Schema({
    flightNo: {
        type: Number,
         required: true
    },
    travelBtwCities :{
        type: String,
         required: true
    }, 
    flightTimings:{
        type: Number,
        required: true
    }, 
    planeCategory:{
        type: String,
         required: true
    }
   });


   const Flight = new mongoose.model('Flight',flightSchema)

   module.exports = Flight;



//    const mongoose = require('mongoose');

// const { Schema } = mongoose;

// const Stocks = new Schema({
//     stock_name: {
//         type: String,
//     },
//     value: {
//         type: String,
//     },  
//     created_at: {
//         type: Date,
//         default: new Date(),
//     },
//     updated_at: {
//         type: Date,
//     },

// }, {
//     toJSON: {
//         virtuals: true,
//     },
// });

// const user = mongoose.model('stocks', Stocks, 'stocks');

// module.exports = user;
 