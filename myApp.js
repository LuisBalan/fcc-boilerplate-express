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
    if(process.env.MESSAGE_STYLE == "uppercase"){
        responseValue = "HELLO JSON"
    }else{
        responseValue = "Hello json"
    };
    res.json({message: responseValue});
});






module.exports = app;