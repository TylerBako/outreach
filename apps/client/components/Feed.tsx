import PostCard from '../components/PostCard'


function Feed({posts, fetchPosts}) {

    return (
        <div>
            {posts.map(post => (
                <PostCard key={post.id} post={post} fetchPosts={fetchPosts} />
            ))}
        </div>
    )
}

export default Feed