import express from 'express'
import passport from 'passport'
import BearerStrategy from '../authentication/bearer-token.js';

const BearerRoutes = express.Router();
passport.use(BearerStrategy)
BearerRoutes.post('/auth-bearer', 
	passport.authenticate('bearer', { session: false}),
	(req, res) => {
		res.json(req.user)
	})
export default BearerRoutes