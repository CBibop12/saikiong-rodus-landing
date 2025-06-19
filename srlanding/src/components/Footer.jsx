import '../styles/Footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>© {new Date().getFullYear()} Saikiong Rodus. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer 