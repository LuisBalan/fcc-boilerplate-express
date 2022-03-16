var express = require('express');
var app = express();
var port = 8080;

app.listen(port, () => {
    
    console.log('Hello World!')
})


module.exports = app;