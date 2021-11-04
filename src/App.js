import React from 'react';
import Coins from './components/Coins';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
