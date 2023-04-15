const roomModel = require('../models/RoomModel');

// getAllRooms
const getAllRooms = async(req, res) => {
    const rooms = await roomModel.find({})
    res.status(200).json(rooms);
}

// getSingleRoom

// addSingleRoom
const addRoom = async (req, res) => {
    const {collegeName, adderName, rent, addressLine1, addressLine2} = req.body
    try{
        const room = await roomModel.create({collegeName, adderName, rent, addressLine1, addressLine2})
        res.status(200).json(room);

    } catch (error){
        res.status(400).json({error: error.message});
    }
}
// deleteSingleRoom


module.exports = {
    getAllRooms,
    addRoom
}