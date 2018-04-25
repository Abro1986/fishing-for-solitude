let db = require('./models')
let Spot = require('./models/spot')


let bodyParser = require('body-parser');
let express = require('express');
//let path = require('path')

let app = express()

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	db.Spot.find({}, function(err, spots){
		console.log(spots)
	  if (err) {console.log(err)}
	
	 else {res.render("index.ejs", {spots: spots});}
	});
});


app.post('/spots', function(req, res){
	console.log('new spot')
});






const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
	console.log(`listening on port ${PORT}`);
});