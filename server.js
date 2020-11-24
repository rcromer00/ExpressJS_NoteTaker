// Dependencies
var express = require("express");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");

var app = express();
var PORT = process.env.PORT ||  3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", apiRoutes);
app.use("/",htmlRoutes);

// Listener 
app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT); 
});


