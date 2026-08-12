import { useState } from 'react'
import { LoaderCircle } from 'lucide-react'
import { Button } from './ui/button.tsx'


const API_URL = import.meta.env.VITE_API_URL

type PostInputProps = {
    fetchPosts: () => Promise<void>
}


function PostInput({fetchPosts}: PostInputProps) {
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] =  useState(false)


    const handleSubmit = async () => {
        setIsLoading(true)
        try {
       const response = await fetch(`${API_URL}/posts`, {
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
        <div className="fixed left-0 right-0 bottom-0 flex justify-center px-6 pb-6 pt-[18px] pointer-events-none">
        <div className="pointer-events-auto shadow-lg/20 w-full max-w-[800px] ...">

        <div className="flex items-center gap-3 rounded-[18px] border border-[#efe6da] bg-white px-2 py-3 pl-4 shadow-[0_10px_34px_rgba(43,38,34,0.069)]">
            <div className="w-[34px] h-[34px] rounded-full flex-none"></div>
            <input placeholder="Share something with the community..." className="flex-1 border-none outline-none bg-transparent text-[18px] py-2" value={message}
              onChange={((e) => setMessage(e.target.value))} />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            <Button type='submit' className='flex-none rounded-[13px] bg-[#f29057] text-white font-bold text-[14.5px] px-[22px] py-[11px] hover:bg-[#e87d40]
            ' onClick={handleSubmit}>
                {isLoading ? <LoaderCircle className="size-5 animate-spin" /> : "Post" }</Button>
        </div>
        </div>
        </div>







        /*<div className="fixed bottom-0 left-0 right-0 p-4 shadow-lg" style={{backgroundColor: '#302a26'}}>
            <textarea 
            className="text-white py-2 rounded-lg p-4 w-full h-24"
             value={message}
              onChange={((e) => setMessage(e.target.value))}
              placeholder="Write your post here"
              style={{backgroundColor: '#f29057'}}>
              </textarea>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

            <Button type="submit"
             className="text-white rounded fle items-center justify-center" 
             onClick={handleSubmit}
             style={{backgroundColor: '#f29057'}}>
                {isLoading ? <LoaderCircle className="size-5 animate-spin" /> : "Submit Post" }
            </Button>

        </div>*/
    )
}

export default PostInput