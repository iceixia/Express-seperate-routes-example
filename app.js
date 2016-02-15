var express = require('express');
var app = express();

app.use('/html', express.static(__dirname + "/static/html"));
app.use('/css', express.static(__dirname + "/static/css"));
app.use('/js', express.static(__dirname + "/static/js"));
app.use('/bootstrap', express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use('/jquery', express.static(__dirname + "/node_modules/jquery/dist"));
app.use('/angular', express.static(__dirname + "/node_modules/angular"));

app.get('/', function(req, res){
    
});

app.get('/player', function(req, res){
    
});

app.get('/admin', function(req, res){
    
});

app.get('/test', function(req, res){
    res.send("It works!");
})
app.listen(8000);
console.log("Server started");