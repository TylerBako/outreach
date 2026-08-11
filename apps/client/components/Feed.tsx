import PostCard from '../components/PostCard'
import type { Post } from '../src/types'

type FeedProps = {
    posts: Post[]
    fetchPosts: () => Promise<void>
}

function Feed({posts, fetchPosts}: FeedProps) {

    return (
        <div className="max-w-2/3 mx-auto p-4 pb-40">
            {posts.map(post => (
                <PostCard key={post.id} post={post} fetchPosts={fetchPosts} />
            ))}
        </div>
    )
}

export default Feed