import express from "express";
import mongoose from "mongoose";
import Blog from "./blog.js"

const app = express();
const port = 3001;

// Middleware
app.use(express.json())
function addBlog(req, res, next) {
	const blog = new Blog({ 
		title: req.body.title,
		snippet: req.body.snippet,
		body: req.body.body
	});
	blog.save()
		.then((data) => {
			res.send(data)
		})
		.catch((err) => {
			console.error(err)
		})
}
function getAllBlogs (req, res) {
	Blog.find()
		.then((data) => {
			res.send(data)
		})
}
function getBlogById(req, res) {
	Blog.findById(req.params.id)
		.then((data) => {
			res.send(data)
		})
}
// Express routes
app.post('/add-blog', addBlog)
app.get('/all-blogs', getAllBlogs)
app.get('/single-blog/:id', getBlogById )
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