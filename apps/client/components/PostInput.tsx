import { useState } from 'react'



function PostInput({fetchPosts}) {
    const [message, setMessage] = useState("")



    const handleSubmit = async () => {
        await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({content: message, authorId: 1})
        })
        fetchPosts()
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
            <textarea 
            className="bg-black text-white py-2 rounded-lg p-4 w-full h-24"
             value={message}
              onChange={((e) => setMessage(e.target.value))}
              placeholder="Write your post here">
              </textarea>

            <button type="submit"
             className="bg-black text-white px-4 py-2 rounded" 
             onClick={handleSubmit}>
                Submit
                </button>
        </div>
    )
}

export default PostInput