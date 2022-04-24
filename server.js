var express = require('express');
const bodyParser = require('body-parser'); 
var app = express();

app.use(express.static('./Acc'));

app.get('/', function (req, res) {
   res.sendFile('/home/runner/acc/Acc/index.html')
});

app.get('/simer', (req, res) => {
  res.send('u naughty naughty... Simer@AccelerationStudios.ml')
  // naughty naughty
});

app.get('/*', (req, res) => {
  res.sendFile('/home/runner/acc/Acc/index.html')
  // used for 404 if no other get functions are triggered
});

var server = app.listen(8080, function() {
  var port = server.address().port
  var family = server.address().family
  var address = server.address().address

  console.log("Server running on Port:", port, "| Family:", family,"| Address", address)
});
