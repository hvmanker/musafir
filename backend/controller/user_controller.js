const ur=require("../model/user_model")
const user=ur.user;

//controller->changes in model and view are handeled by controller
exports.createuser = async(req, res) => {
    console.log(req.body);
        const adduser =new user(req.body);
        await adduser.save()
        .then(res.status(201).json('created'))
        .catch(err => console.log(err));
  };