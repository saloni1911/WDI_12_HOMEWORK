// var request = require('request');
// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); 
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

var app = require('express')();

const PORT = 5000;

app.set('views', './views'); //to specify where to look for file
app.set('view engine', 'ejs');
var request = require('request');

// to use lodash, type npm install lodash --save in terminal
var _ = requir('lodash');
// var myLib = require('./myLib');
var arr = [2,3,4,5,6]

console.log(_.sample(arr));

// var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + process.argv[2] + '&APPID=24bdf769abb21d4cbc3635d826d64ae1'
// request(url, function (error, response, body) {

// var uri = 'http://api.openweathermap.org/data/2.5/weather'

// 	request({
// 		uri: uri, 
// 		qs: {
// 				q: 'Melbourne,au', 
// 				units: 'metric',
// 				appid: '24bdf769abb21d4cbc3635d826d64ae1' //export process.env.OPEN_WEATHER_API_KEY=24bdf769abb21d4cbc3635d826d64ae1 //to hide key, save it in bash profile 
// 				}
//   }, function (error, response, body) {
//   	console.log('error:', error); 
//   	console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   	var body = JSON.parse(body);
//   	console.log('Temparature of ' + body.name + ' is ' + body.main.temp); // Print the HTML for the Google homepage.
 
// });

app.get('/', function(req, res) {
var uri = 'http://api.openweathermap.org/data/2.5/weather'
	request({
		uri: uri, 
		qs: {
				q: 'Melbourne,au', 
				units: 'metric',
				appid: '24bdf769abb21d4cbc3635d826d64ae1' //export process.env.OPEN_WEATHER_API_KEY=24bdf769abb21d4cbc3635d826d64ae1 //to hide key, save it in bash profile 
				}
  }, function (error, response, body) {
  		var body = JSON.parse(body);
  		var place = body.name;
  		var tempr = body.main.temp
  		res.render('index', {name: place, temperature: tempr})
	});
});

app.listen(PORT, function() {
	console.log('listening on port' + PORT);
});




















