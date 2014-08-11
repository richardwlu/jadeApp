var express = require('express');

var jade = require('jade');

var portNumber = 3000;

//init express
var app = express();
console.log('Express initialized.');

//set views
app.set('views', __dirname + '/views');

//init jade
app.set('view engine', 'jade');
console.log('jade initialized');

app.set