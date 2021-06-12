import './App.css';
import About from './component/about us';
import Footer from './component/footer';
import Gallery from './component/gallery';
import Header from './component/header';
import Hero from './component/hero';
import firstSectionBackground from './img/WhatsApp Image 2021-06-01 at 20.47.30 (1).jpeg';


function App() {
  return (
    <div className="App">
     <div className="first-layer" style={{backgroundImage:`url("${firstSectionBackground}")`, backgroundSize: "100%"}}>
      <Header />
      <Hero />
     </div>
     <About />
     <Gallery />
     <Footer />
    </div>
  );
}

export default App;
