var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// hint: remember nodemon? i'd recommend it :)

var PORT = 8080;
//initialize the app
var app = express();

app.get('/twitter', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/twitter.html'));
})

app.get('/tweet', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/tweet.html'));
})

// hint: check out what body parser does

// make a get('/tweets'), and post('/create_tweet') here

//make the app listen on a port
app.listen(PORT, function() {
  console.log("The server is listening http://localhost:" + PORT);
})

/* to learn about how to get other require other files here
 * http://www.sitepoint.com/understanding-module-exports-exports-node-js/
 */
