import { useEffect, useState } from "react"
import React from "react"


export default function PostsList() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])



    if (loading) {return <div>Loading...</div>}
    if (posts.length === 0) {return <div>No posts found</div>}
    
    return (
        <div>
            {
                 posts.slice(0, 10).map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}