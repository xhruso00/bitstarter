var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(fs.readFileSync('index.html').toString(utf8,0,buffer.length));

app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
