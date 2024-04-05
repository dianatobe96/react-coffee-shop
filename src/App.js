import './App.css';
import footerImage from './assets/images/footer-coffee.png';
import Card from './components/Card/Card';

function App() {
  return (<>
    {/* This is only an example using the Card component */}
    <Card image={{ url: footerImage }} title="This is an Example" subtitle="Testing" align='left' />
  </>);
}

export default App;
