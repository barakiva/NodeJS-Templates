import express from "express";
import {fileURLToPath} from 'url'; 
import {dirname, join} from 'path'; 

const __dirname = dirname(fileURLToPath(import.meta.url))
//Routing
//	Home
const loginRoute = express.Router();
loginRoute.get('/login', (req, res) => {
	res.sendFile(__dirname, 'login.html')
})
//	Users
loginRoute.get('/user', (req, res) => {
	res.send('Hello user')
})
loginRoute.post('/authenticate ', (req, res) => {
	const user = {
		username: req.body.username,
		password: req.body.password
	}
	res
		.status(200)
		.body(user)
})
export default loginRoute;