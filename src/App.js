import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CoinDetails from './Pages/CoinDetails';

const App = () => {

  return (
    <div className="container">
      <div className="row">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path = "/" element={<Home />}></Route>
          <Route exact path = "/coins/CoinDetails" element={<CoinDetails />}></Route>
          </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
