let mongoose= require('mongoose')
mongoose.connect('mongodb://localhost/fishing-spots');
module.exports.Spot = require("./spot.js")

