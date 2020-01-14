// Dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Database
// const User = require("./models/user");

// Http Routes
// const userRoutes = require("./routes/user");
// const nfRoutes = require("./routes/newsFeed");

// mongoDB-mongoose initialize
mongoose.connect("mongodb://localhost:27017/softwareEngineering",{useNewUrlParser: true, useUnifiedTopology: true});

// Dependencies Package
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Http Routes called
app.get("/", function(req, res) {
    res.render("index");
});

app.get("/scooter", function(req, res) {
    res.render("scooter");
});

app.get("/underbones", function(req, res) {
    res.render("underbones");
});

app.get("/standard", function(req, res) {
    res.render("standard");
});

app.get("/sports", function(req, res) {
    res.render("sports");
});
// app.use(userRoutes);
// app.use(nfRoutes);

// Server initialize
app.listen(3000, function() {
  console.log("server started at port 3000!");
});
