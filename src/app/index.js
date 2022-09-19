import express from "express";
import mongoose from "mongoose";
import blogRoutes from "./routes/blog-endpoints.js"
import {init} from './database/find.js'
import dotenv from 'dotenv'

const app = express();
const port = 3001;
// Middleware
app.use(express.json())
app.use(blogRoutes)
// Database
dotenv.config()
mongoose
	.connect(process.env.DB_STRING)
	.then((res) => app.listen(port, ()=> console.info(`Listening on port ${port}`)))
	.catch((err) => console.error(err));
// Modules
init()
