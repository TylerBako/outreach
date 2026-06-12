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
        <div>
            <textarea className="bg-black text-white py-2 rounded px-4"
             value={message}
              onChange={((e) => setMessage(e.target.value))}>
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