import dotenv from 'dotenv'
import passport from 'passport'
import googleStrategy from 'passport-google-oauth20'
//Config
dotenv.config()

passport.use(new googleStrategy.Strategy({
	clientID: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	callbackURL: "http://localhost:5000/google/callback", // URL's Google SENDS authenticate requests
	passReqToCallback: true
	},
	function(request, accessToken, refreshToken, profile, done) {
		return done(null, profile)
	}
))
// function(request, accessToken, refreshToken, profile, done) {
// 	return done(null, profile);
passport.serializeUser(function(user,done){
	done(null, user)
})
passport.deserializeUser(function(user,done){
	done(null, user)
})