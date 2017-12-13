// server.js
// load the things we need
var express = require('express');
var request = require('request');
var app = express();


var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


// set the view engine to ejs
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
   res.render('index.ejs', { });
});
app.get('/keuze.ejs', function(req, res) {
   res.render('keuze.ejs', { });
});
app.get('/select.ejs', function(req, res) {
   res.render('select.ejs', { });
});
app.get('/feel.ejs', function(req, res) {
   res.render('feel.ejs', { });
});
app.get('/chat.ejs', function(req, res) {
   res.render('chat.ejs', { });
});
app.get('/comment.ejs', function(req, res) {
   res.render('comment.ejs', { });
});
app.get('/end.ejs', function(req, res) {
   res.render('end.ejs', { });
});


app.listen(8080);
