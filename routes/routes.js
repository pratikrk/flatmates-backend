const express = require('express');

const router = express.Router();

// router.get('/', (req, res) => { res.json({msg: "HI"}) });

router.get('/room', (req, res) => { 
    res.send("All rooms detail") ;
})

router.get('/room/:id', (req, res) => { 
    res.send("Single room detail") ;
})

router.post('/room', (req, res) => { 
    res.send("Add a room detail");
})

router.delete('/room/:id', (req, res) => { 
    res.send("Delete a room");
})

module.exports = router;