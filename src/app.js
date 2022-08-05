const express = require ('express');
const morgan = require('morgan');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
   res.sendFile('jarocho.html', { root: __dirname });
});

module.exports = app;

