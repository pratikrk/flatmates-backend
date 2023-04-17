const userModel = require('../models/UserModel');

const registerUser=async (req, res) => {
    let user = new userModel(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
}

const loginUser= async (req, res) => {
    if (req.body.email && req.body.password) {
      let user = await userModel.findOne(req.body).select("-password");
      if (user) {
        res.send(user);
      } else {
        res.send({ result: "No user found!" });
      }
    } else {
      res.send({ result: "No user found!" });
    }
  }

module.exports ={
    registerUser,
    loginUser
}
