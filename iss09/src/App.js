import React, { useState } from 'react';
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

  const handleAnimationComplete = () => {
    setShowIntro(false);
  };

  return (
    <Router>
      {showIntro ? (
        <IntroAnimation onAnimationComplete={handleAnimationComplete} />
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
