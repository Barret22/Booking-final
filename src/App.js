import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import About from './components/About/About.js';
import Hotels from './components/Hotels/Hotels.js';


const App = () => {
  const [showHotelsLink, setShowHotelsLink] = useState(false);

  return (
    <Router>
      <Header showHotelsLink={showHotelsLink} />
      <Routes>
        <Route path="/" element={<Main setShowHotelsLink={setShowHotelsLink} />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </Router>
  );
};

export default App;