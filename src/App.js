import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      {/* <Portfolio /> */}
      {/* <Services /> */}
      <Info />
      <Footer />
    </div>
  );
}

export default App;