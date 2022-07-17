import express from "express";
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

import loginRoutes from './login.js';

const app = express();
const port = 3009;
//Static
// const __dirname = dirname(fileURLToPath(import.meta.url))
// app.use(express.static(join(__dirname, 'public/')))
//Middleware
app.use(express.json());
// Routing
// app.use('/', loginRoutes)
// TODO I cannot believe this. A fucking whitespace. It seems to be that if you have ANY trailing whitespace in a router path (for me it's at the end) you will get the 'Cannot METHOD /path' error.
app.post('/authenticate2 ', (req, res) => {
	const user = {
		username: req.body.username,
		password: req.body.password
	}
	res
		.status(200)
		.send(user)
})
app.post('/authenticate', (req, res) => {
	console.dir(req.body)
	res
		.status(200)
		.send({msg: 'Authenticated properly!', sender: "Bar"})
})
//Server
app.listen(port, (req, res) => {
		console.info(`Listening on port ${port}`)
})