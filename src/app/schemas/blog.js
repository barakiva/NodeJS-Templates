import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	snippet: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	comments: [{body: String, date: Date}],
	date: {type: Date, default: Date.now} // first value assumed to be type, so using Date.now wouldn't work for the first property
	,meta: {votes: Number, favs: Number}
}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema)
export default Blog;