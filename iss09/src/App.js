import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroAnimation from './components/IntroAnimation';
import Accueil from './components/Accueil';
import Forfaits from './components/Forfaits';
import Assistances from './components/Assistances';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Animation d'introduction terminée !");
      setShowIntro(false);
    }, 3000); // Durée de l'animation d'introduction en millisecondes (3000 ms = 3 secondes)

    return () => clearTimeout(timer);
  }, []);

  console.log("showIntro :", showIntro);

  return (
    <Router>
      {showIntro ? (
        <IntroAnimation onAnimationComplete={() => setShowIntro(false)} />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/forfaits" element={<Forfaits />} />
            <Route path="/assistances" element={<Assistances />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}


export default App;
