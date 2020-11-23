// Dependencies
var fs = require("fs");
var express = require("express");
var path = require("path");
const { SSL_OP_EPHEMERAL_RSA } = require("constants");

var app = express();
var PORT = 3000;

// Listener 
app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT); 
});

// Capture the url the request is made to
var path = req.url;

// Call the function with different arguments
switch (path) {

    case "/index":
    case "/notes":
        return renderHTML(path + ".html", res);
    
        default:
            return renderHTML("/index.html", res);
}


// Use fs package to read html files
function renderHTML(filePath, res) {
    return fs.readFile(__dirname + filePath, function(err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

// Routes
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

