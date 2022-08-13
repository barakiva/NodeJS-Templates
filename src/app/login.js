import express from "express";
import {fileURLToPath} from 'url'; 
import {dirname, join} from 'path'; 

const __dirname = dirname(fileURLToPath(import.meta.url))
//Routing
//	Home
const loginRoute = express.Router();
loginRoute.get('/login', (req, res) => {
	res.sendFile('login.html', {root: __dirname + '/public/'})
})
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