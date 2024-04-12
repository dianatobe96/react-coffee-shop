import './Home.css';
import { useEffect, useState } from 'react';
import coffeeImg from '../../assets/images/coffee-home.jpg';

export default function Home({ menuButtonColor = '#bc9a6c' }) {
    const [buttonColor, setButtonColor] = useState('');

    useEffect(() => {
        setButtonColor(menuButtonColor);
    }, [menuButtonColor]);

    return (
        <section id="home" className='container'>
            <div className="left-side">
                <span className="welcome-text">Welcome to coffee hut</span>
                <h1 className="title">Heal the world with coffee</h1>
                <p>
                    The aromatic elixir that awakens the mind, fuels creativity, and
                    ignites the spirit with each invigorating sip
                </p>
                <button type="button" style={{ backgroundColor: buttonColor }}>See menu</button>
            </div>

            <div className="right-side">
                <img src={coffeeImg} alt="Cup of coffee" />
            </div>
        </section>
    )
}
