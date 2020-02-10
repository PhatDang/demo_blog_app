import mongoose from "mongoose";
import Blog, { find, remove, findByIdAndUpdate } from "../models/Blog";

export async function allBlogPost(req, res) {
	try {
		let posts = await find();
		res.status(200).json(posts);
	} catch (err) {
		res.status(500).json(err);
	}
}

export async function addBlogPost(req, res) {
	try {
		const post = new Blog({
			title: req.body.title,
			content: req.body.content,
			category: req.body.category,
			author: req.body.author
		});
		let newPost = await post.save();
		res.status(200).json({ data: newPost });
	} catch (err) {
		res.status(500).json({ error: err });
	}
}

export async function deleteBlogPost(req, res) {
	try {
		const id = req.params.blogId;
		let result = await remove({ _id: id });
		res.status(200).json(result);
	} catch (err) {
		res.status(500).json(err);
	}
}

export async function updateBlogPost(req, res) {
	try {
		const id = req.params.blogId;
		let result = await findByIdAndUpdate(id, req.body);
		res.status(200).json(result);
	} catch (err) {
		res.status(500).json(err);
	}
}
