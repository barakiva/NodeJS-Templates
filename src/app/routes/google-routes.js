import '.././authentication/google-auth.js'
import passport from 'passport'
import express from 'express'

const googleRouter = express.Router()
// Google Login
googleRouter.get('/auth/google',
	passport.authenticate('google', {scope: ['email', 'profile'],
}))
googleRouter.get('/google/callback',
	passport.authenticate('google', {
		successRedirect: '/protected',
		failureRedirect: '/auth/google/failure'
	}
))
// Protected routes
function isLoggedIn(req, res, next) {
	req.user ? next() : res.sendStatus(401)
}
googleRouter.get('/protected', isLoggedIn, (req, res)=> {
	res.send("You're in!")
})
// Failure
googleRouter.get('/auth/google/failure', (req, res)=> {
	res.send('Something went wrong')
})
export default googleRouter