import express from "express";
const app = express();
const homeRoute = express.Router();
const userRoute = express.Router();
const port = 3009;

//Routing
//	Home
homeRoute.get('/home', (req, res) => {
	res.redirect('/user')
})
//	Users
userRoute.get('/user', (req, res) => {
	res.send('Hello user')
})
// Routes
app.use('/', homeRoute)
app.use('/', userRoute)
//Server
app.listen(port, (req, res) => {
		console.info(`Listening on port ${port}`)
})