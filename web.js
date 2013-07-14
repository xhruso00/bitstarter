var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var text = fs.readFileSync('index.html');
var text2 = text.toString();


app.get('/', function(request, response) {
  response.send(text2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
