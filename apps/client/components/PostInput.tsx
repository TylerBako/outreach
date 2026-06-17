import { useState } from 'react'
import { LoaderCircle } from 'lucide-react'


function PostInput({fetchPosts}) {
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] =  useState(false)


    const handleSubmit = async () => {
        setIsLoading(true)
        try {
       const response = await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({content: message, authorId: 1})
        })

        if (!response.ok) {
            const data = await response.json()
            setError(data.error)
            return
        }
        setMessage("")
        fetchPosts()
        setError("")
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
        <div className="fixed bottom-0 left-0 right-0 p-4 shadow-lg" style={{backgroundColor: '#302a26'}}>
            <textarea 
            className="text-white py-2 rounded-lg p-4 w-full h-24"
             value={message}
              onChange={((e) => setMessage(e.target.value))}
              placeholder="Write your post here"
              style={{backgroundColor: '#f29057'}}>
              </textarea>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            <button type="submit"
             className="text-white px-4 py-2 rounded fle items-center justify-center" 
             onClick={handleSubmit}
             style={{backgroundColor: '#f29057'}}>
                {isLoading ? <LoaderCircle className="size-5 animate-spin" /> : "Post" }
                </button>
        </div>
    )
}

export default PostInput