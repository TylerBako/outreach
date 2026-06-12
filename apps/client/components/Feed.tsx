
function Feed({posts}) {

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>{post.content}</div>
            ))}
        </div>
    )
}

export default Feed