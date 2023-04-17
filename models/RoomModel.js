const mongoose = require('mongoose');
const Schema = mongoose.Schema
const roomSchema = new Schema({
    collegeName:{
        type: String,
        required: true
    },
    adderName:{
        type: String,
        required: true
    },
    contactNo:{
        type: String,
        required: true
    },
    rent:{
        type: Number,
        required: true
    },
    addressLine1:{
        type: String,
        required: true
    },
    addressLine2:{
        type: String
    }
}, {timestamps: true });

module.exports = mongoose.model('Room', roomSchema);
