import PostCard from '../components/PostCard'
import { useMemo } from "react"

function PreviousPosts({posts, fetchPosts}) {

     const userPosts = useMemo(() => {
        return posts.filter(post => post.authorId === 1)
        }, [posts])
    
    return (
        <div className="max-w-2x1 mx-auto p-4 pb-40">
            {userPosts.map(post => (
                <PostCard key={post.id} post={post} fetchPosts={fetchPosts} />
))}
        </div>
    )
}

export default PreviousPosts