import express from "express";

import helper from "./helper.js";

const app = express();
let port;
await helper.findFreePort.then((res)=> port = res)
app.use(express.json())
app.get('/', (req, res) => {
	res
		.status(200)
		.send('Hello there!')
})
app.post('/', (req, res)=> {
	res
		.status(200)
		.send({msg: 'Hello there', sender: "Bar"})
})
app.post('/authenticate', (req, res)=> {
	console.dir(req.body)
	res
		.status(200)
		.send({msg: 'Authenticated properly!', sender: "Bar"})
})

app.listen(port, (req, res) => {
	console.info(`Listening on port ${port}`)
})