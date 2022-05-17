let express = require('express');
require('dotenv').config()
let app = express();

// Serve a Hello Express
// app.get("/", (req, res) => {
//     res.send("Hello Express");
// })

// app.use('/public', express.static(__dirname + '/public'));

//Serving an html file from server
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/views/index.html');
// });

//Serving a JSON response on an specific route

app.get('/json', (req, res) => {
    let responseValue;
    let stringResponse = "Hello json"
    if(process.env.MESSAGE_STYLE == "uppercase"){
        responseValue = stringResponse.toUpperCase();
    }else{
        responseValue = stringResponse;
    };
    res.json({message: responseValue});
});

//Implement a Root-Level Request Logger Middleware

// function gralMiddleware(arg1, arg2, callback1){
//     console.log(`${arg1.method} ${arg1.path} ${arg1.ip}`);
//     callback1;
// };

// app.use((req, res) => {
//     console.log(`${req.method} ${req.path} ${req.ip}`);
//     next();
// });

// app.use((req, res) => {
//     console.log(`${req.method} ${req.path} - ${req.ip}`)
//     next();
// });

//Chain Middleware to Create a Time Server

// app.get('/now', function(req, res, next){
//     req.time = new Date().toString();
//     next();
// }, function(req, res){
//     res.json({time: req.time})
// });




module.exports = app;