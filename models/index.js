let mongoose= require('mongoose')

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
mongoose.connect('mongodb://localhost/fishing-spots');
}

module.exports.Spot = require("./spot.js")

