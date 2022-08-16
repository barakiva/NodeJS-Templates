import express from "express";
import {fileURLToPath} from 'url'; 
import {dirname, join} from 'path'; 
import passport from "passport";
import passportLocal from 'passport-local'
import User from './schemas/User.js'
const __dirname = dirname(fileURLToPath(import.meta.url))



const user = new User({
	username: "bar",
	password: "bar"
})
user.save()
// Authentication
const LocalStrategy = passportLocal.Strategy
function verifyPassword(passsword){
	return true
}
function verifyUser(username, password, done) {
	
	User.findOne({username: username}, function (err, user) {
	  if (err) { return done(err); }
	  if (!user) { return done(null, false); }
	  if (!verifyPassword(password)) { return done(null, false); }
	  console.log('Passport authenticated!')
	  return done(null, user);
	});
}
// Middleware
passport.serializeUser(function(user, done) {
done(null, user);
});

passport.deserializeUser(function(user, done) {
done(null, user);
});
passport.use(new LocalStrategy(verifyUser));
//Routing
//	Home
const loginRoute = express.Router();

loginRoute.post('/login', 
	passport.authenticate('local', { failureRedirect: '/login' }),(req, res) => {
		res.send('Passport authenticated!');
	});
//	Users
loginRoute.get('/user', (req, res) => {
	res.send('Hello user')
})
loginRoute.post('/authenticate', (req, res) => {
	const user = {
		username: req.body.username,
		password: req.body.password
	}
	console.log(user)
	res
		.status(200)
		.send(user)
})
export default loginRoute;