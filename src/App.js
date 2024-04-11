import './App.css';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Team from './components/Team/Team';
import Clients from './components/Clients/Clients';
import CoffeeCategory from './components/CoffeeCategory/CoffeeCategory';


function App() {
  return (<>
    <section className='hero'>
      <Navbar />
      <Home />
      
    </section>
    <About/>
    <CoffeeCategory/>
    <Menu />
    <Team />
   
    <Clients />

  </>);
}

export default App;
