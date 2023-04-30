const express = require('express');
const {getAllRooms, getRoomById, addRoom} = require('../controllers/RoomController');
const router = express.Router();
const {registerUser, loginUser, updateUser} = require('../controllers/UsersController');


// router.get('/', (req, res) => { res.json({msg: "HI"}) });

router.get('/room', getAllRooms);

router.get('/room/:id', getRoomById);

// router.get('/roombymail', getRoomByMail);

router.post('/room', addRoom);

router.delete('/room/:id', (req, res) => { 
    res.send("Delete a room");
})


//for login process..

router.post("/register", registerUser );
router.post("/login", loginUser );
router.post("/updateuser", updateUser)

module.exports = router;