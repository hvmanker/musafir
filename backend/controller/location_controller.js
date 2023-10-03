const loc = require("../model/location_model")
const location= loc.location;

exports.create = async(req, res) => {
    console.log(req.body);
    const addlocation =new location(req.body);
    await addlocation.save()
    .then(res.status(201).json('created'))
    .catch(err => console.log(err));
    };
    
    exports.get = async(req, res) => {
      const data = await location.find().exec()
      res.json(data);
    };
    
     
    exports.update = async(req, res) => {
      //form se data nikalna to update
      const rname = req.params.name;
      const updated = await location.findOneAndUpdate({city:rname},req.body);
      res.json(updated);
    };
  
    exports.deletelocation = async(req, res) => {
      const rname = req.params.name;
      const deleted = await location.findOneAndDelete({city:rname});
      res.json(deleted);
    };
    
