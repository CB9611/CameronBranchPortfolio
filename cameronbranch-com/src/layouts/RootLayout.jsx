import { Outlet, Link } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div className="app-container">
            <nav className="navbar">
                <div className="nav-links">
                    <Link to="/" className="social-icon home" title="Home" />
                    <a 
                        href="https://github.com/CB9611"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon github"
                        title="Check out my GitHub!"
                    />
                    <a
                        href="https://www.linkedin.com/in/cb9611/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon linkedin"
                        title="Check out my LinkedIn!"
                    />
                </div>
            </nav>

            <main className="content-area">
                <Outlet />
            </main>

            <footer className="footer">
                <p>
                    © Cameron Branch {new Date().getFullYear()}, unless otherwise noted. All rights reserved. • Powered by{' '}
                    <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a> &{' '}
                    <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">Vite</a>
                </p>
            </footer>
        </div>
    );
};

export default RootLayout;