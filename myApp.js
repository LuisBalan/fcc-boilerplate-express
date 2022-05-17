var express = require('express');
var app = express();
var port = 8080

app.get("/", (req, res) => {
    res.send("Hello Express")
})