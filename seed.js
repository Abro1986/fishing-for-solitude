let db = require('./models')

let fishingSpots = [
  { 	
  	name: "miracle mile",
  	description: "big, fast, deep, browns",
  },
];


console.log("hi im alive")

db.Spot.remove({}, function(err, spots){
	if(err) {
		console.log(err)
	} else {
		console.log("database cleaned")
	}
})

db.Spot.create(fishingSpots ,function(err, spots){
	if (err) {return console.log(err);}
	console.log('saved new spot: ', spots)
	process.exit();
});