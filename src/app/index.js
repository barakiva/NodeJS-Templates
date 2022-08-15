import express from "express";
import mongoose from "mongoose";
import blogRoutes from "./blog-endpoints.js"

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

// Schemas
const kittySchema = new mongoose.Schema({
	name: String
})
const Kitten = mongoose.model('Kitten', kittySchema)
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

kittySchema.methods.speak = function speak() {
	const greeting = this.name
	  ? "Meow name is " + this.name
	  : "I don't have a name";
	console.log(greeting);
};