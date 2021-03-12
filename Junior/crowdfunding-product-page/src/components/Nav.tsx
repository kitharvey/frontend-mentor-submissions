

const Nav: React.FC = () => {
        return (
            <header className='container' >
                <div className="nav-wrapper">
                    <h1>crowdfund</h1>
                    <nav className="navigations">
                        <a href="/">
                            <span>About</span>
                        </a>
                        <a href="/">
                            <span>Discover</span>
                        </a>
                        <a href="/">
                            <span>Get Started</span>
                        </a>
                    </nav>
                </div>
                
            </header>
        );
}


export default Nav