const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
<<<<<<< HEAD
        mobile: Number,
        password: String
=======
        password: String,
        mobile: Number
>>>>>>> 2d85143dbd22d0b123be1aa31d8c06e1e4bf4736
    }
);

module.exports = mongoose.model("users", userSchema);