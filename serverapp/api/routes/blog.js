import { Router } from "express";
import {
	allBlogPost,
	addBlogPost,
	deleteBlogPost,
	updateBlogPost
} from "../controllers/blogController";

const router = Router();

router.get("/", allBlogPost);
router.post("/", addBlogPost);
router.delete("/:blogId", deleteBlogPost);
router.put("/:blogId", updateBlogPost);

export default router;
