const express = require('express');
const {getAllRooms, addRoom} = require('../controllers/RoomController');
const router = express.Router();


// router.get('/', (req, res) => { res.json({msg: "HI"}) });

router.get('/room', getAllRooms);

router.get('/room/:id', (req, res) => { 
    res.send("Single room detail") ;
})

router.post('/room', addRoom);

router.delete('/room/:id', (req, res) => { 
    res.send("Delete a room");
})

module.exports = router;