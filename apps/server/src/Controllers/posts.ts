import prisma from "../db"
import { Request, Response } from 'express'




const createPost = async (req: Request, res: Response) => {
    const { content, authorId } = req.body
 const post = await prisma.post.create({
    data: {
        content: content,
        authorId: authorId
    }
})
res.status(201).json(post)
}

const getPostById = async (req: Request, res: Response) => {
    const idParam = req.params.id
    const id = Number(idParam)
    const post = await prisma.post.findUnique({
        where: { id },
        include: {
            comments: true
        }
    }) 
        if (!post) {
        res.status(404).json({ error: "Post was not found"})
        return
    }
    res.status(201).json(post)
}


const createComment = async (req: Request, res: Response) => {
    const { content, authorId } = req.body
    const postIdParam = req.params.postId
    const postId = Number(postIdParam)
    const comment = await prisma.comment.create({
        data: {
            content: content,
            authorId: authorId,
            postId: postId
        }
    })
    res.status(200).json(comment)
}


const getAllPosts = async (req: Request, res: Response) => {
    const post = await prisma.post.findMany({
        orderBy: {
            createdAt: "desc"
        },
        include: {
            comments: {
                include: {
                    author: true
                }
            },
            author: true
        }
    })
    res.status(200).json(post)
}

const deletePost = async (req: Request, res: Response) => {
    const idParam = req.params.id
    const id = Number(idParam)
    try {
    const post = await prisma.post.delete({
        where: { id },
    })
    res.status(200).json({ message: "Post has successfully been deleted"})
} catch (error) {
    res.status(404).json({ message: "Post doesn't exist"})
}
}

const deleteComment = async (req: Request, res: Response)=> {
    const commentIdParam = req.params.commentId
    const commentId = Number(commentIdParam)
    try {
    const comment = await prisma.comment.delete({
        where: { id: commentId }
    })
    res.status(200).json({ message: "Comment has been deleted"})
} catch (error) {
    res.status(404).json({ message: "No commments to delete"})
}
}
export { createPost, getPostById, getAllPosts, deletePost, createComment, deleteComment}