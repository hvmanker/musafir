const express = require("express");
const userControl=require('../controller/user_controller')
const userRouter=express.Router();

userRouter.post("/",userControl.createuser);

exports.routes=userRouter;