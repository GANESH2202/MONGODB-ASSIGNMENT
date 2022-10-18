const express = require('express');
const Flight = require('../src/model/flights');


const router = new express.Router();

router.post('/flight', async (req,res)=>{
    try {
        const Flight = new Flight (req.body);
         console.log(req.body);
        const insert_flight = await Flight.save(); 
        res.status(400).send(insert_flight);
    }catch(err)  {
        res.status(201).send(err);
    }
});


 

router.get("/flights" , async(req,res)=>{
    try{
        const flight = await Flight.find({});
        res.send(flight);
    }catch(err){
        res.status(201).send(err);
    }
})


module.exports = router;