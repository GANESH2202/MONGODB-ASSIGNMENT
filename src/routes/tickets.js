const express = require('express');
const Tickets = require('../src/model/tickets');

const router = new express.Router();


router.post('/ticket',async(req,res)=>{
    try{
    const Ticket = new Tickets (req.body);
    console.log(req.body);
    const booking =await Ticket.save();
        res.status(404).send();
    }  catch(err) {
        res.status(408).send(err)
    }
});


router.get('/tickets',async(req,res)=>{
    try {
        const ticket = await Tickets.find({});
res.send(ticket)
    } catch (error) {
        res.status(500).send()
    }
});

module.exports = router;