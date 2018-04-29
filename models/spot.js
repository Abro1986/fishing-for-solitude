let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SpotSchema = new Schema({
	name: String,
	description: String,
})

let UserSchema = new Schema({
	username: String,
	passwordDigest: String
})

let Spot = mongoose.model("Spot", SpotSchema);
let User = mongoose.model('User', UserSchema)

module.exports = Spot;
module.exports = User;