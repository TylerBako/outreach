import { useState } from 'react'



function PostInput({fetchPosts}) {
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")


    const handleSubmit = async () => {
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
        fetchPosts()
        setError("")
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
            <textarea 
            className="text-white py-2 rounded-lg p-4 w-full h-24"
             value={message}
              onChange={((e) => setMessage(e.target.value))}
              placeholder="Write your post here"
              style={{backgroundColor: '#f29057'}}>
              </textarea>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            <button type="submit"
             className="text-white px-4 py-2 rounded" 
             onClick={handleSubmit}
             style={{backgroundColor: '#f29057'}}>
                Post
                </button>
        </div>
    )
}

export default PostInput