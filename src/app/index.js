import express from "express";
import session from 'express-session'
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';
import mongoose from "mongoose";
import loginRoutes from './login.js';
import BearerRoutes from './routes/bearer-routes.js'
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
// Credentials
app.use('/', loginRoutes)
app.get('login', (req, res)=> {
	res.sendFile('/login.html')
})
// Bearer Token
app.use('/', BearerRoutes)
//Server
mongoose
	.connect('mongodb://localhost:27017/test')
	.then((res) => app.listen(port, ()=> console.info(`Listening on port ${port}`)))
	.catch((err) => console.error(err))