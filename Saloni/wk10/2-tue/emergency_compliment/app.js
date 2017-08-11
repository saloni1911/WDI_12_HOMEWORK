var app = require('express')();
var request = require('request');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var complimentsController = require('./controllers/complimentsController');

var _ = require('lodash');
const PORT = 5000;

app.set('views', './views'); 
app.set('view engine', 'ejs');

var compliments = [
	  "Your instructors love you",
	  "High five = ^5",
	  "Is it Ruby Tuesday yet?",
	  "It's almost beer o'clock",
	  "The Force is strong with you"
	]
	var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

	// var randomCompliment = _.sample(compliments);
	// var randomColor = _.sample(colors);


app.get('/', function(req, res) {
	var randomCompliment = _.sample(compliments);
	var randomColor = _.sample(colors);
	res.render('home', {compliment: randomCompliment, color: randomColor} );
});

// app.get('/add/compliment', function(req, res) {
//   // res.send(req.query.compliment);
//   res.render('addcompliment');
// });

app.get('/add/compliment', complimentsController.new)

app.post('/show', function(req, res) {
		// console.log(req.body.compliment);
		var comp = req.body.compliment
		compliments.push(comp);
	
 	res.render('show', {newArr: compliments});
  //res.redirect('/show');
}); 


app.get('/:name', function(req, res) {
	// console.log(res);
	var name = req.params.name;
	var randomCompliment = _.sample(compliments);
	var randomColor = _.sample(colors);
	res.render('printname', {compliment: randomCompliment, color: randomColor, name: name} );
});

app.listen(PORT, function() {
	console.log('listening on port' + PORT);
});














