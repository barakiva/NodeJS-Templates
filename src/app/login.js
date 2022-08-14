import express from "express";
import {fileURLToPath} from 'url'; 
import {dirname, join} from 'path'; 
import passport from "passport";
import passportLocal from 'passport-local'

const __dirname = dirname(fileURLToPath(import.meta.url))
const MockDB = [
	{
		username: 'bar',
		password: 'root'
	},
	{
		username: 'root',
		password: 'root'
	}
]
// Authentication
const LocalStrategy = passportLocal.Strategy
function verifyUser(username, password, done) {
	
	MockDB.find({username: username}, function (err, user) {
	  if (err) { return done(err); }
	  if (!user) { return done(null, false); }
	  if (!user.verifyPassword(password)) { return done(null, false); }
	  console.log('Passport authenticated!')
	  return done(null, user);
	});
  }
passport.use(new LocalStrategy(verifyUser));
//Routing
//	Home
const loginRoute = express.Router();

loginRoute.post('/login', 
	passport.authenticate('local', { failureRedirect: '/login' }),(req, res) => {
		res.redirect('/');
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