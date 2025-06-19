import { useEffect, useState } from 'react'
import '../styles/AdminPanel.scss'
import Navbar from '../components/Navbar'

function AdminPanel() {
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data)
                setLoading(false)
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, body })
        })
            .then((res) => res.json())
            .then((data) => {
                setPosts([data, ...posts])
                setTitle('')
                setBody('')
            })
    }

    return (
        <>
            <Navbar />
            <main className="admin container">
                <h1>Admin Panel</h1>
                <form className="admin__form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn btn--primary">Create Post</button>
                </form>

                <section className="admin__posts">
                    {loading ? (
                        <p>Loading…</p>
                    ) : (
                        posts.map((p) => (
                            <article key={p.id} className="admin__post">
                                <h3>{p.title}</h3>
                                <p>{p.body}</p>
                            </article>
                        ))
                    )}
                </section>
            </main>
        </>
    )
}

export default AdminPanel 