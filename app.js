const express = require('express')
const app = express()
const path = require("path");

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname+ '/index.html'));
})

app.get('/aboutJason', function(req, res) {
   res.sendFile(path.join(__dirname + '/views/aboutme/jason.html'));
});

app.get('/aboutArt', function(req, res) {
   res.sendFile(path.join(__dirname + '/views/aboutme/art.html'));
});

app.get('/aboutBert', function(req, res) {
   res.sendFile(path.join(__dirname + '/views/aboutme/bert.html'));
});

app.get('/aboutDavid', function(req, res) {
   res.sendFile(path.join(__dirname + '/views/aboutme/david.html'));
});

app.get('/aboutJiawen', function(req, res) {
   res.sendFile(path.join(__dirname + '/views/aboutme/jiawen.html'));
});

app.get('/aboutJordan', function(req, res) {
   res.sendFile(path.join(__dirname + '/views/aboutme/jordan.html'));
});

app.listen(17012, 'localhost')
