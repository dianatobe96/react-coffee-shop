import './App.css';

import Navbar from './components/Navbar/Navbar';
import Team from './components/Team/Team';

function App() {
  return (<>
    <section className='hero'>
      <Navbar />
    </section>

    <Team />
  </>);
}

export default App;
