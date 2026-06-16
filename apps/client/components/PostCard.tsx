import { useState } from "react"
import { formatDistanceToNow } from "date-fns"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { ScrollArea } from "./ui/scroll-area"


function PostCard({post, fetchPosts}) {
    const handleDelete = async () => {
        await fetch(`http://localhost:3000/posts/${post.id}`, {
            method: 'DELETE'
        })
        fetchPosts()
    }


    const [comment, setComment] = useState("")
    const [expand, setExpand] = useState(false)
    const [error, setError] = useState("")


    const handleCommentSubmit = async () => {
        const response = await fetch(`http://localhost:3000/posts/${post.id}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ content: comment, authorId: 1})
        })
        if(!response.ok) {
            const data = await response.json()
            setError(data.error)
            return
        }
        fetchPosts()
        setError("")
        setComment("")
    }


    return (
        <div className="rounded-xl bg-white shadow-md p-4 mb-4 relative min-w-90">
            <p className={`${expand ? "" : "line-clamp-3"} font-medium text-lg pt-4 break-words`}>
                {post.content}
            </p>

            <p className="text-sm text-gray-500">{post.author.username} · {formatDistanceToNow(new Date(post.createdAt))}</p>
            

            {/* Seperator between comment and post*/}
            <div className="border-t mt-3 pt-3 border-orange-400">
                {post.comments.slice(0, 2).map(comment => (
                    <div key={comment.id} className="textsm text-gray-600 mb-1 line-clamp-2">
                        <span className="font-medium">{comment.author.username}: </span> {comment.content}
                    </div>
                ))}
            </div>

            <Dialog>
                <DialogTrigger className="text-sm text-orange-400">See more</DialogTrigger>
                <DialogContent className="!bg-white shadow-md" style={{maxWidth: '600px', width: '100%'}}>
                    <ScrollArea className="h-[80ch]">
                    <p className="font-medium text-lg">{post.content}</p>
                    <p className="text-sm text-grey-500">{post.author.username} · {formatDistanceToNow(new Date(post.createdAt))} </p>
                    <div className="border-t mt-3 pt-3 border-orange-400">
                        {post.comments.map(comment => (
                        <div key={comment.id} comment={comment} className="pt-3">{comment.content}
                        <p className="text-sm text-gray-500">{comment.author.username} · {formatDistanceToNow(new Date(comment.createdAt))}</p>
                    </div>
                    ))}
                    </div>
                     <div className="flex flex-col gap-2 mt-2">
                        <textarea value={comment} onChange={((e) => setComment(e.target.value))}
                        className="flex-1 border border-gray-300 rounded p-2 text-sm resize-none" 
                        placeholder="write a comment here">
                        </textarea>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button onClick={handleCommentSubmit}
                        className="rounded-full text-white pl-1 pr-1 px-3 py-1 rounded text-sm self-center" 
                        style={{backgroundColor: '#f29057'}}>comment</button>
                        </div>
                    </ScrollArea>
                </DialogContent>
            </Dialog>

            <button onClick={handleDelete} 
            className="rounded-full absolute top-2 right-2 text-sm px-2 text-white bn-2" 
            style={{backgroundColor: '#f29057'}}>
                X
            </button>


            <div className="flex flex-col gap-2 mt-2">
                <textarea value={comment} onChange={((e) => setComment(e.target.value))}
                 className="flex-1 border border-gray-300 rounded p-2 text-sm resize-none" 
                 placeholder="write a comment here">
                </textarea>
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                <button onClick={handleCommentSubmit}
                 className="rounded-full text-white pl-1 pr-1 px-3 py-1 rounded text-sm self-center" 
                 style={{backgroundColor: '#f29057'}}>comment</button>
            </div>
        </div>
    )
}

export default PostCard