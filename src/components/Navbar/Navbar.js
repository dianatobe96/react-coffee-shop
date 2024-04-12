import { useEffect, useState } from 'react';
import './Navbar.css';

export default function Navbar({ logoText = 'Coffee Shop' }) {
    const [logo, setLogo] = useState('');

    useEffect(() => {
        setLogo(logoText);
    }, [logoText]);

    return (
        <header className='container'>
            <nav className="navbar">
                <span>{logo}</span>

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
