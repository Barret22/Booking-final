import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.js';
import Main from './components/main/Main';
import About from './components/about/About.js';
import Hotels from './components/hotels/Hotels.js';


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