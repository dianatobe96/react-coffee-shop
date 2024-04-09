import './App.css';

import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import Team from './components/Team/Team';


function App() {
    return (<>
        <section className='hero'>
            <Navbar />
            <Home />
        </section>

        <Menu />
        <Team />
    </>);
}

export default App;
