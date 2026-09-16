import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#030712';
  }, []);

  return (
    <div className="dark">
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home darkMode={true} />} />
          <Route path="/about" element={<About darkMode={true} />} />
          <Route path="/services" element={<Services darkMode={true} />} />
          <Route path="/contact" element={<Contact darkMode={true} />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
