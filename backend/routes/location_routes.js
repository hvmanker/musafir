const express = require("express");
const locationControl=require('../controller/location_controller')
const locationRouter=express.Router();

locationRouter
    .post("/", locationControl.create)//Create post/location
    .get("/", locationControl.get)//Read get/locations
    .patch("/:name", locationControl.update)//put overrides the data but patch doesn't override only updates the value
    .delete("/:name", locationControl.deletelocation);//Delete DELETE /locations/:id

exports.routes=locationRouter;
