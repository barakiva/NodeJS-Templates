import express, { application } from "express";
import session from 'express-session'
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';
import mongoose from "mongoose";
import loginRoutes from './login.js';
import BearerRoutes from './routes/bearer-routes.js'
import dotenv from 'dotenv'
import passport from 'passport'
import { resolveNaptr } from "dns";
import googleRouter from './routes/google-routes.js'
//Config
dotenv.config()
const app = express();
const port = process.env.PORT;
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
app.use(passport.initialize())
app.use(passport.session())
// Credentials
app.use('/', loginRoutes)
app.get('/', (req, res)=> {
	res.send("Welcome to passport auth lab!")
})
app.get('login', (req, res)=> {
	res.sendFile('/login.html')
})
// Bearer Token
app.use('/', BearerRoutes)
// Google
app.use('/', googleRouter)
//Server
mongoose
	.connect('mongodb://localhost:27017/test')
	.then((res) => app.listen(port, ()=> console.info(`Listening on port ${port}`)))
	.catch((err) => console.error(err))