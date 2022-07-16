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
	console.log('Authenticated')
	res.send('Authenticated')
})
export default loginRoute;