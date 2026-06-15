import PostCard from '../components/PostCard'


function Feed({posts, fetchPosts}) {

    return (
        <div className="max-w-2x1 mx-auto p-4 pb-40">
            {posts.map(post => (
                <PostCard key={post.id} post={post} fetchPosts={fetchPosts} />
            ))}
        </div>
    )
}

export default Feed