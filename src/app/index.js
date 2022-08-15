import express from "express";
import mongoose from "mongoose";
import blogRoutes from "./routes/blog-endpoints.js"

const app = express();
const port = 3001;

// Middleware
app.use(express.json())
app.use(blogRoutes)
// Database
mongoose
	.connect('mongodb://localhost:27017/test')
	.then((res) => app.listen(port, ()=> console.info(`Listening on port ${port}`)))
	.catch((err) => console.error(err))

