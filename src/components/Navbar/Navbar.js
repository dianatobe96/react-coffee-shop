import './Navbar.css';

export default function Navbar() {
    return (
        <header className='container'>
            <nav className="navbar">
                <h1>Coffee Shop</h1>

                <ul>
                    <li><a href="#home" className="active">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#categories">Categories</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
