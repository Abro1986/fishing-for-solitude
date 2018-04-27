let db = require('./models')
let Spot = require('./models/spot')


let bodyParser = require('body-parser');
let express = require('express');
//let path = require('path')

let app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'))

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	db.Spot.find({}, function(err, spots){
		console.log(req.body)
	  if (err) {console.log(err)}
	
	 else {res.render("index.ejs", {spots: spots});}
	});
});


app.post('/spots', function(req, res){
	console.log(req.body)
	let newSpot = db.Spot(req.body);
	db.Spot.create(newSpot, function(err, newSpot) {
		if (err) {console.log(err)}
	})

	res.redirect("/");
});






app.set('port', process.env.PORT || 3001)

  app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })