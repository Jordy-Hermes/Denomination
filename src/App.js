import React from 'react';
import "./styles.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Denomination from './components/Denomination';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/denomination" element={<Denomination />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;