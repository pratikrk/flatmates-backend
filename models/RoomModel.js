const mongoose = require('mongoose');
const Schema = mongoose.Schema
const roomSchema = new Schema({
    houseBuildingName:{
        type: String,
        required: true
    },
    roomNo:{
        type: String,
        required: true
    },
    addressLine1:{
        type: String,
        required: true
    },
    addressLine2:{
        type: String
    },
    occupancy:{
        type: Number,
        required: true
    },
    rent:{
        type: Number,
        required: true
    },
    contactNo:{
        type: String,
        required: true
    },
    
}, {timestamps: true });

module.exports = mongoose.model('Room', roomSchema);
