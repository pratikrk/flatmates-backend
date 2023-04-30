const userModel = require('../models/UserModel');

const updateUser=async (req, res) => {
  var query = {'email': req.body.email};
  req.newData = req.body;
  let result = await userModel.findOneAndUpdate(query, req.newData);
  result = await userModel.findOne(query).select('email name mobile')
  res.send(result)
}

const registerUser=async (req, res) => {
    let user = new userModel(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    // console.log(result);
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
    updateUser,
    registerUser,
    loginUser
}
