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

export default createPost