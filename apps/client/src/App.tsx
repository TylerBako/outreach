import PostInput from "../components/PostInput"
import Feed from "../components/Feed"
import { useState, useEffect } from 'react'
import NavBar from "../components/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PreviousPosts from "../components/PreviousPosts"


const API_URL = import.meta.env.VITE_API_URL

function App(){
  const [ posts, setPosts ] = useState([])

        const fetchPosts = async () => {
           const response = await fetch(`${API_URL}/posts`)
           const data = await response.json()
           setPosts(data)
    }
  

 useEffect(() => {
        fetchPosts()
    }, [])



  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Feed posts={posts} fetchPosts={fetchPosts} />} />
      <Route path="/previous-posts" element={<PreviousPosts posts={posts} fetchPosts={fetchPosts} />} />
      </Routes>
      <PostInput fetchPosts={fetchPosts}/>
      </BrowserRouter>
    </div>
  )
}

export default App