var express = require('express');
var app = express.createServer(express.logger());
var buffer = new Buffer(500);
var fs = require('fs');

fs.readFile('./index.html', 'utf8', function (err,data) {
      if (err) {
	      return console.log(err);
	    }
      buffer.write (data);
    });

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8',0,500));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
