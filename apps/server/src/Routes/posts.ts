import express from "express";
import createPost from "../Controllers/posts";

const router = express.Router();

router.post('/posts', createPost)

export default router