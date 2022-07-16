import express from "express";
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

import loginRoutes from './login.js';

const app = express();
const port = 3009;
//Static
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(join(__dirname, 'public/')))
//Middleware
app.use(express.json());
// Routing
app.use('/', loginRoutes)
//Server
app.listen(port, (req, res) => {
		console.info(`Listening on port ${port}`)
})