import PostInput from "../components/PostInput"
import Feed from "../components/Feed"
import { useState, useEffect } from 'react'




function App(){
  const [ posts, setPosts ] = useState([])

        const fetchPosts = async () => {
           const response = await fetch("http://localhost:3000/posts")
           const data = await response.json()
           setPosts(data)
    }
  

 useEffect(() => {
        fetchPosts()
    }, [])



  return (
    <div>
      <h1>Outreach</h1>
      <Feed posts={posts} fetchPosts={fetchPosts} />
      <PostInput fetchPosts={fetchPosts} />
      
    </div>
  )
}

export default App