const mongoose = require('mongoose')
const {Schema} = mongoose

const locationSchema = new Schema(
    {
        location_id:Number,
        city:String,
        description:String,
        image:String,
        sublocation_name:[String],
        sublocation_image:[String]
    }
)

exports.location = mongoose.model("location",locationSchema);