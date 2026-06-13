import { useState } from "react"



function PostCard({post, fetchPosts}) {
    const handleDelete = async () => {
        await fetch(`http://localhost:3000/posts/${post.id}`, {
            method: 'DELETE'
        })
        fetchPosts()
    }


    const [comment, setComment] = useState("")


    const handleCommentSubmit = async () => {
        await fetch(`http://localhost:3000/posts/${post.id}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ content: comment, authorId: 1})
        })
        fetchPosts()
        setComment("")
    }













    return (
        <div>
            <p>{post.content}</p>
            <p>{post.authorId}</p>
            <p>{post.createdAt}</p>
            <div>
                {post.comments.map(comment => (
                    <div key={comment.id} comment={comment}>{comment.content}</div>
                ))}
            </div>
            <button onClick={handleDelete}>Delete</button>
            <textarea value={comment} onChange={((e) => setComment(e.target.value))} ></textarea>
            <button onClick={handleCommentSubmit}>post</button>
        </div>
    )
}

export default PostCard