const mongoose = require('mongoose');
const Schema = mongoose.Schema
const roomSchema = new Schema({
    buildName:{
        type: String,
        required: true
    },
    roomNumber:{
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
    additionalNote:{
        type: String,
    },
    activeStatus:{
        type: Boolean,
        required: true
    },
    adderMail:{
        type: String,
        required: true
    },
    adderName:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    uniqueFlatKey:{
        type: String,
        required: true
    }
    
}, {timestamps: true });

module.exports = mongoose.model('Room', roomSchema);
