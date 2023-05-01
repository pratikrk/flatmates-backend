const roomModel = require('../models/RoomModel');

// getAllRooms
const getAllRooms = async(req, res) => {
    const rooms = await roomModel.find({activeStatus: true},{})
    res.status(200).json(rooms);
}

// getRoomByMailId
const getRoomById = async(req, res) => {
    const { id } = req.params;
    // console.log(id);
    const room = await roomModel.find({adderMail: id}).select('buildName roomNumber addressLine1 addressLine2 rent occupancy activeStatus additionalNote');
    res.status(200).json(room);
}

// getSingleRoom

// addSingleRoom
const addRoom = async (req, res) => {
    const {buildName, roomNumber, addressLine1, addressLine2, occupancy, rent, activeStatus, additionalNote, adderMail, adderName, mobile } = req.body
    let uniqueFlatKey = buildName.slice(0,3).toUpperCase() + roomNumber.toUpperCase()
    try{
        const room = await roomModel.findOneAndUpdate({adderMail: adderMail},{uniqueFlatKey, buildName, roomNumber, addressLine1, addressLine2, occupancy, rent, additionalNote, activeStatus, adderMail, adderName, mobile},{upsert: true})
        res.status(200).json(room);

    } catch (error){
        res.status(400).json({error: error.message});
    }
}
// deleteSingleRoom


module.exports = {
    getAllRooms,
    getRoomById,
    addRoom
}