import express from "express";
import passport from "passport";
import CredentialStrategy from './authentication/credentials.js'

// Middleware
passport.use(CredentialStrategy)
//Routing
//	Home
const loginRoute = express.Router();
loginRoute.post('/login', 
	passport.authenticate('local', { failureRedirect: '/login.html' }),(req, res) => {
		res
			.status(200)
			.set({
				'Content-type': 'application/json; charset=UTF-8',
				'Accept': 'application/json'
			})
			.send({msg: 'authenticated'})
	});
export default loginRoute;