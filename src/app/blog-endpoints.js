import express from 'express'
import Blog from "./blog.js"

const router = express.Router();
// Middleware functions
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
router.post('/add-blog', addBlog)
router.get('/all-blogs', getAllBlogs)
router.get('/single-blog/:id', getBlogById)
export default router