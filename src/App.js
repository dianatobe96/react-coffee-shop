import './App.css';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Team from './components/Team/Team';
import Clients from './components/Clients/Clients';
import CoffeeCategory from './components/CoffeeCategory/CoffeeCategory';
import Footer from './components/Footer/Footer';


function App() {
    const footerText = "Heal the world with coffee";
    return (<>
        <section className='hero'>
            <Navbar />
            <Home />
        </section>

        <About headingText="About US" />
        <CoffeeCategory />
        <Menu />
        <Team/>
        <Clients/>
        <Footer footerText={footerText} />
    </>);
}

export default App;
