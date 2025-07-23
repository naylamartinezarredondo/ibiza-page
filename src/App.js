import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Cobertura from './components/Cobertura';
import Footer from './components/Footer';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Services />
      <Info />
      <Cobertura />
      <Footer />
    </div>
  );
}

export default App;