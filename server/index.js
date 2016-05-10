var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var socket = require('socket.io');
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


//make the app listen on a port
var server = app.listen(PORT, function() {
    console.log("The server is listening http://localhost:" + PORT);
})

var io = socket.listen(server);

io.on('connection', function(socket) {
    console.log("A client has connected")
    socket.on('get-tweets', function(data) {
        //console.log(data);
        socket.emit('tweets', {"Name": "Nick" })
    })
})// io connection

/* to learn about how to get other require other files here
 * http://www.sitepoint.com/understanding-module-exports-exports-node-js/
 */
