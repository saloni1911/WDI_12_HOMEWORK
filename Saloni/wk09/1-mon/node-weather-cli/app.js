// var request = require('request');
// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); 
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });


var request = require('request');

var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + process.argv[2] + '&APPID=24bdf769abb21d4cbc3635d826d64ae1'
request(url, function (error, response, body) {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('Temparature of ' + JSON.parse(body).name + ' is ' + JSON.parse(body).main.temp); // Print the HTML for the Google homepage.
 
});