let express = require('express');
let app = express();

// Serve a Hello Express
// app.get("/", (req, res) => {
//     res.send("Hello Express");
// })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

module.exports = app;