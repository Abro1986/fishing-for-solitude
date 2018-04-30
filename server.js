let db = require('./models')
let Spot = require('./models/spot')


let bodyParser = require('body-parser');
let express = require('express');
let path = require('path')
const bcrypt = require('bcrypt');
const session = require('express-session');

const User = require('./models/user')

let app = express()
const saltRounds = 10;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'))
app.use(session({
	secret: 'something secret',
	resave: false,
	saveUnintialized: true,
}))

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(req,res){
	res.render("signup.ejs")
})

app.get('/allspots', function(req, res) {
	Spot.find({}, function(err, spots){
		console.log(spots)
		
		console.log(req.body)
	  if (err) {console.log(err)}
	
	 else {res.render("index.ejs", {spots: spots});}
	});
});

app.post('/signup', function(req, res) {
		console.log(req.params);
		console.log(req.body);
		console.log("sign up first")

	let username = req.body.username;


	bcrypt.hash(req.body.password, saltRounds, function(err, hash){
		let user = new User({username: username, passwordDigest: hash});
		user.save().then(function()  {
				console.log('new user created! ', username);
				req.session.user = user;
				res.redirect('/allspots')
		})
	})	
});


app.post('/spots', function(req, res){
	console.log(req.body)
	let newSpot = db.Spot(req.body);
	Spot.create(newSpot, function(err, newSpot) {
		if (err) {console.log(err)}
	})
	console.log(db.Spot(req.body))
	res.redirect("/allspots");
});

app.delete('/spots/:id', function(req, res) {
	Spot.findOneAndRemove({_id : req.params.id}, function(err, spots){
		if (err) {
			console.log(err)
		}
//			res.redirect("/allspots");
			res.render("index.ejs", {spots: spots});

	}) 
//			res.render("index.ejs", {spots: spots});
	
})


app.put('/spots/:id', function(req,res){
    let name = req.body.name;
    let description = req.body.description;
    let species = req.body.species;
    console.log(req.body)
    Spot.findOneAndUpdate(
        {_id: req.params.id}, 
        {$set:{species: species}}, 
        {new: true}, 
        function (err, spots) {
            if (err) {
                console.log(err, "Something wrong when updating data!");
            } else {
                console.log('updated!' + req.body.species);
                
                res.render("index.ejs", {spots: spots});
        }
    })
});








app.set('port', process.env.PORT || 3001)

  app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })