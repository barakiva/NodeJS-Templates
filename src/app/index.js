import express from "express";
const app = express();
const homeRoute = express.Router();
const userRoute = express.Router();
const port = 3009;

//Routing
homeRoute.get('/home', function (req, res) {
	res.send("Hello /hello")
})
userRoute.get('/user', function (req, res) {
	res.send('Hello user')
})
app.use('/', homeRoute)
app.use('/', userRoute)
app.listen(port, (req, res) => {
		console.info(`Listening on port ${port}`)
})