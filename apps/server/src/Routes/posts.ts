import express from "express";
import { createPost, getAllPosts, getPostById, deletePost, createComment, deleteComment } from "../Controllers/posts.js";

const router = express.Router();

router.post('/posts', createPost)
router.get("/posts", getAllPosts)
router.get('/posts/:id', getPostById)

router.post('/posts/:postId/comments', createComment)
router.delete("/posts/:id", deletePost)
router.delete("/posts/:postId/comments/:commentId", deleteComment)
export default router