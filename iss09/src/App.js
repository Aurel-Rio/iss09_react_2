import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroAnimation from './components/IntroAnimation';
import Accueil from './components/Accueil';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleAnimationComplete = () => {
    setShowIntro(false);
  };

  return (
    <Router>
      <Routes>
        {showIntro ? (
          <Route path="/" element={<IntroAnimation onAnimationComplete={handleAnimationComplete} />} />
        ) : (
          <Route path="/" element={<Accueil />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
