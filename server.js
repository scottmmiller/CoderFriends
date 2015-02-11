var express = require('express');
var session = require('express-session');
var passport = require('passport');
var bodyParser = require('body-parser');
var GitHubStrategy = require('passport-github').Strategy;
var port = 9999;

var app = express();

//isAuthed Function
var isAuthed = function(req, res, next) {
	if(!req.isAuthenticated()) {
		return res.redirect('/')
	}
	next();
};

//Middleware Initializations
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(session({
	secret: 'iLOVEnodeJS9'
}));
app.use(passport.initialize());
app.use(passport.session());

//GitHub Strategy
passport.use(new GitHubStrategy({
	clientID: 'f8b97735cf595228815a',
	clientSecret: '870fb330e38d5948a3d0bd6bc94a06414bb1cf5b',
	callbackURL: 'http://127.0.0.1:9999/auth/github/callback'
	},
	function(accessToken, refreshToken, profile, done) {
		//create, update database info
		return done(null, profile);
	}
));

//GitHub Auths
app.get('/auth/github', passport.authenticate('github'));

app.get('/auth/github/callback', passport.authenticate('github', {
	successRedirect: '/home.html',
	failureRedirect: '/'
}));



app.listen(port, function() {
	console.log("You're on port " + port)
});