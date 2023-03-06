import React from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';

function App() {
  return (
    <main>

      <Navbar />

      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Services />
      <Contact />

      <Footer />

    </main>
  );
}

export default App;
