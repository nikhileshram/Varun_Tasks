const express = require('express');
const app = express();

app.listen(3000);


app.get('/validation', function(req, res){
    res.sendFile(__dirname + '/home.html')    
});


