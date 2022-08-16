import express from "express";
import passport from "passport";
import CredentialStrategy from './authentication/credentials.js'

// Middleware
passport.use(CredentialStrategy)
//Routing
//	Home
const loginRoute = express.Router();
loginRoute.post('/login', 
	passport.authenticate('local', { failureRedirect: '/login' }),(req, res) => {
		res.send('Passport authenticated!');
	});
export default loginRoute;