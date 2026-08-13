import PostInput from "../components/PostInput"
import Feed from "../components/Feed"
import { useState, useEffect } from 'react'
import NavBar from "../components/NavBar"
import { Routes, Route, useLocation } from 'react-router-dom'
import PreviousPosts from "../components/PreviousPosts"
import AuthPage from '../components/AuthPage'


const API_URL = import.meta.env.VITE_API_URL

function App(){
  const [ posts, setPosts ] = useState([])

  const location = useLocation()
  const isAuthPage = location.pathname.startsWith('/auth/')

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
      {!isAuthPage && <NavBar />}
      <Routes>
      <Route path="/" element={<Feed posts={posts} fetchPosts={fetchPosts} />} />
      <Route path="/previous-posts" element={<PreviousPosts posts={posts} fetchPosts={fetchPosts} />} />
      <Route path="/auth/sign-in" element={<AuthPage pathname="sign-in" />} />
      <Route path="/auth/sign-up" element={<AuthPage pathname="sign-up" />} />
      </Routes>
      {!isAuthPage && <PostInput fetchPosts={fetchPosts}/>}
    </div>
  )
}

export default App