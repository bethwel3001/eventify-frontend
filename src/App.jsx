import './styles/globals.css';  
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import Navbar from './components/Navbar';  
import Footer from './components/Footer'; 
import Events from './components/Events';
import Home from './pages/Home';  
import About from './pages/About';  
import Contact from './pages/Contact';  
import Explore from './pages/Explore';  
import Partners from './pages/Partners';
import Testimonials from './pages/Testimonials';
import Faqs from './pages/Faqs';
function App() {
    const getPage = () => {
      const params = new URLSearchParams(window.location.search);
      return params.get('page');
    };
    const currentPage = getPage();

  return (
    <div>
      {currentPage !== 'events' && <Navbar />}  
      {currentPage === 'events' ? (
        <Events />
      ) : (
        <>
          <Home />
          <About />
          <Partners />
          <Explore />
          <Testimonials />  
          <Contact /> 
          <Faqs />
        </>
      )}

      {currentPage !== 'events' && <Footer />}
    </div>
  );
}

export default App;
