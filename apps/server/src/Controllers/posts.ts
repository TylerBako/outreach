import prisma from "../db"
import { Request, Response } from 'express'
import Anthropic from '@anthropic-ai/sdk'



const client = new Anthropic({
    apiKey: process.env['ANTHROPIC_API_KEY'],
})


const createPost = async (req: Request, res: Response) => {
    const { content, authorId } = req.body
    const message = await client.messages.create({
        model: 'claude-sonnet-5',
        max_tokens: 10,
        messages: [{ role: 'user', content: `You are moderating the content. Check if this message contains any harmful content such as self-harm, suicide, or any crisis langaage. Respond with only "SAFE" or "HARMFUL". Message: ${content}`}]
    })
        const claudeResponse = message.content[0].type === 'text' ? message.content[0].text : ''

    if(claudeResponse === "HARMFUL") {

        res.status(400).json({error: "We understand you may be going through a difficult time but we have had to block this message due to theme's occuring within. If you're struggling, please reach out to a mental health professional"})
        return
    }
 const post = await prisma.post.create({
    data: {
        content: content,
        authorId: authorId
    },

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
    const message = await client.messages.create({
        model: 'claude-sonnet-5',
        max_tokens: 10,
        messages: [{role: 'user', content: `You are moderating the content. Check if this message contains any harmful content such as self-harm, suicide, or any crisis langaage. Respond with only "SAFE" or "HARMFUL". Message: ${content}`}]
    })

    const claudeResponse = message.content[0].type === 'text' ? message.content[0].text : ''
    if(claudeResponse === 'HARMFUL') {
        res.status(400).json({error: "We understand you may be going through a difficult time but we have had to block this message due to theme's occuring within. If you're struggling, please reach out to a mental health professional"})
        return
    }
    
    const comment = await prisma.comment.create({
        data: {
            content: content,
            authorId: authorId,
            postId: postId
        }
    })
    res.status(200).json(comment)
}


const getAllPosts = async (_req: Request, res: Response) => {
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

    console.log("DATABASE RETURNED")
    
    res.status(200).json(post)
}

const deletePost = async (req: Request, res: Response) => {
    const idParam = req.params.id
    const id = Number(idParam)
    try {
    await prisma.post.delete({
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
    await prisma.comment.delete({
        where: { id: commentId }
    })
    res.status(200).json({ message: "Comment has been deleted"})
} catch (error) {
    res.status(404).json({ message: "No commments to delete"})
}
}
export { createPost, getPostById, getAllPosts, deletePost, createComment, deleteComment}