
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

// Http Routes
// const userRoutes = require("./routes/user");
// const nfRoutes = require("./routes/newsFeed");

// mongoDB-mongoose initialize
mongoose.connect("mongodb://localhost:27017/softwareEngineering",{useNewUrlParser: true, useUnifiedTopology: true});

// Database
const User = require("./models/user");

// const admin = new User ({
//   Username: "admin",
//   Password: "admin"
// });
//
// admin.save();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(session({secret: "secret.", resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(function(user, done) {done(null, user.id);});
passport.deserializeUser(function(id, done) {User.findById(id, function(err, user) {done(err, user);});});

// Http Routes
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
});

app.get("/", function(req, res) {
    res.render("index",{currentUser: req.user});
});

app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});

app.post("/login", passport.authenticate("local", {
  failureRedirect: "",
  successRedirect: "/"
}), function(req, res) {
});

app.get("/signup", function(req, res) {
    res.render("signup");
});

app.post("/signup", function(req, res) {
  User.register({username: req.body.username}, req.body.password, function(err, user){
    if(err) {
      console.log(err);
      res.redirect("/");
    } else {
      passport.authenticate("local")(req, res, function(){
        res.redirect("/");
      });
    }
  });
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


function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}

// Server initialize
app.listen(3000, function() {
  console.log("server started at port 3000!");
});
