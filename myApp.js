var express = require('express');
var app = express();
var port = 8080


const newRequest = function(req, res){
  res.send("\'Hello Express\'")
};


app.get('/', newRequest)

app.listen(port, () => {
  console.log('ready!')
})

module.exports = app;