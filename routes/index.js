git initconst express = require('express');
const router = express.Router();
const userModel= require("./users");
const crypto = require("crypto");
const passport = require('passport');
const localStrategy = require("passport-local")

passport.use(new localStrategy(userModel.authenticate()))

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile', function(req, res, next) {
  // res.render("profile");
  res.send("User logged in")

});

router.post('/register', function(req, res, next) {
  var data = new userModel({
    username: req.body.username,
    name: req.body.name
  })
  userModel.register(data, req.body.password)
  .then(function(registeredUser){
    passport.authenticate("local")(req, res, function(){
      // res.redirect("/profile")
      res.send("User Logged in")
    });
  })
});

router.post('/login', passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/"
}), function(req, res, next) {
  res.render('index');
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  else{
    res.redirect("/")
  }
}

module.exports = router;
