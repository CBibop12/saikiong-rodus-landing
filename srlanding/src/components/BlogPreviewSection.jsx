import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/BlogPreviewSection.scss'

function BlogPreviewSection() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data)
                setLoading(false)
            })
    }, [])

    return (
        <section id="blog" className="blog-preview">
            <div className="container">
                <h2 className="blog-preview__title">Latest Blog Posts</h2>
                {loading ? (
                    <p>Loading…</p>
                ) : (
                    <div className="blog-preview__grid">
                        {posts.map((post) => (
                            <article key={post.id} className="blog-preview__card">
                                <h3>{post.title}</h3>
                                <p>{post.body.substring(0, 120)}…</p>
                                <Link to="/admin" className="btn btn--outline btn--small">
                                    Read More
                                </Link>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default BlogPreviewSection 