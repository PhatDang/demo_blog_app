import { Schema, model } from "mongoose";
let blogSchema = Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		default: Date.now()
	}
});
var Blog = model("Blog", blogSchema);
export default Blog;
