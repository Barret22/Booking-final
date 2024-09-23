import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Header from './components/header/Header.js';
import Main from './pages/main/Main.js';
import About from './pages/about/About.js';
import Hotels from './components/hotels/Hotels.js';

const App = () => {
  return (
    <Router>
      <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/hotels" element={<Hotels />} />
          </Routes>
    </Router>

  );
};

export default App;
