import express from "express";
import session from 'express-session'
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';
import loginRoutes from './login.js';
import mongoose from "mongoose";
const app = express();
const port = 3009;
//Static
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(join(__dirname, 'public/')))
//Middleware
app.use(express.json());
app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: 'bla bla bla' 
}))
// Routing
app.use('/', loginRoutes)
app.get('login', (req, res)=> {
	res.sendFile('/login.html')
})
//Server
mongoose
	.connect('mongodb://localhost:27017/test')
	.then((res) => app.listen(port, ()=> console.info(`Listening on port ${port}`)))
	.catch((err) => console.error(err))