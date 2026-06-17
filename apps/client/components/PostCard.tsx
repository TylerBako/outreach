import { useState } from "react"
import { formatDistanceToNow } from "date-fns"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { ScrollArea } from "./ui/scroll-area"
import { LoaderCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar.tsx'
import { Button } from './ui/button.tsx'


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
    const [isLoading, setIsLoading] = useState(false)


    const handleCommentSubmit = async () => {
        setIsLoading(true)
        try {
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
    } catch (err: unknown) {
        if(err instanceof Error) {
            setError(err.message || "Network error")
        } else {
            setError("Network error")
        }
    } finally {
        setIsLoading(false)
    }
}


    return (
        <div className="rounded-xl shadow-lg p-4 mb-4 relative text-white min-w-90 border" style={{backgroundColor:'#302a26', borderColor: '#f29057', boxShadow: '10px 5px 1px #f29057'}}>
            <p className={`${expand ? "" : "line-clamp-3"} font-medium text-lg pt-4 break-words`}>
                {post.content}
            </p>

            <div className="flex items-center gap-2 mt-1">
                <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/10.x/micah/svg?seed=${post.author.username}`}
                    alt="@shadcn"
                    className="border color" />
                    <AvatarFallback className="rounded-full bg-orange-500 w-8 h-8 flex items-center justify-center text-white font-bold text-sm">{post.author.username[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <span className="text-sm"style={{color: '#f29057'}}>{post.author.username} · {formatDistanceToNow(new Date(post.createdAt))}</span>
            </div>
            

            {/* Seperator between comment and post*/}
            <div className="border-t mt-3 pt-3 border-orange-400">
                {post.comments.slice(0, 2).map(comment => (
                    <div key={comment.id} className="text-sm text-gray-300 mb-1 line-clamp-2 flex items-center gap-2 justify-start">
                           <Avatar>
                    <AvatarImage src={`https://api.dicebear.com/10.x/micah/svg?seed=${comment.author.username}`}
                    alt="@shadcn"
                    />
                    <AvatarFallback className="rounded-fill bg-orange-500 w8 h-8 flex items-center justify-center text-white font-bold text-sm">{comment.author.username[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                    <div className="text-left">
                        <span className="font-medium" style={{color: '#f29057'}}>
                         {comment.author.username}: </span> {comment.content} </div>
                    </div>
                ))}
            </div>

            <Dialog>
                <DialogTrigger className="text-sm text-orange-400">See more</DialogTrigger>
                <DialogContent className="text-white border-2" style={{borderColor: '#f29057',maxWidth: '600px', width: '100%', backgroundColor: '#302a26'}}>
                    <ScrollArea className="h-[80ch]">
                    <p className="font-medium text-lg">{post.content}</p>
                    <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src={`https://api.dicebear.com/10.x/micah/svg?seed=${post.author.username}`}
                        alt="@shadcn" />
                        <AvatarFallback className="rounded-full bg-orange-500 w-8 h-8 flex items-center justify-center text-white font-bold text-sm">{post.author.username[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <p className="text-sm text-gry-500">{post.author.username} · {formatDistanceToNow(new Date(post.createdAt))} </p>
                    </div>

                    <div className="border-t mt-3 pt-3 border-orange-400">
                    <div>
                        {post.comments.map(comment => (
                            <div key={comment.id} comment={comment} className="pt-3 flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src={`https://api.dicebear.com/10.x/micah/svg?seed=${comment.author.username}`}
                                    alt="@shadcn" />
                                    <AvatarFallback className="rounded-full bg-orange-500 w-8 h-8 flex items-center justify-center text-white font-bold text-sm">{comment.author.username[0].toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div>
                                {comment.content}
                                <p className="text-sm" style={{color: '#f29057'}}>
                                    {comment.author.username} · {formatDistanceToNow(new Date(comment.createdAt))}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>

                     <div className="flex flex-col gap-2 mt-2">
                        <textarea value={comment} onChange={((e) => setComment(e.target.value))}
                        className="flex-1 border border-gray-300 rounded p-2 text-sm resize-none" 
                        placeholder="write a comment here"
                        style={{backgroundColor: '#65574e'}}>
                        </textarea>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <Button onClick={handleCommentSubmit}
                        className="rounded-full text-white rounded self-center" 
                        style={{backgroundColor: '#f29057'}}>Comment</Button>
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
                 className="flex-1 border rounded p-2 text-sm resize-none" 
                 placeholder="write a comment here"
                 style={{backgroundColor: '#65574e'}}>
                </textarea>

                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

                <Button onClick={handleCommentSubmit}
                 className="rounded-full text-white rounded self-center flex items-center justify-center" 
                 style={{backgroundColor: '#f29057'}}>
                {isLoading ? <LoaderCircle className="size-5 animate-spin" /> : "Comment" }
                </Button>
            </div>
        </div>
    )
}

export default PostCard