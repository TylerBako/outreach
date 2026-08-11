export type Author = {
    id: number
    username: string
}

export type Comment = {
    id: number
    content: string
    createdAt: string
    author: Author
}

export type Post = {
    id: number
    content: string
    createdAt: string
    author: Author
    comments: Comment[]
    authorId: number
}