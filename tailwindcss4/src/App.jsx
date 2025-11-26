import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ProductList from './components/Productlist';
import { CounterProvider } from './components/CartContext';
import CartItem from './components/CartItem';

function App() {
  return (
    <CounterProvider>
      <Router>
        <Navbar />

        <div className="pt-1.5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <ProductList />
          <CartItem />
        </div>

      </Router>
    </CounterProvider>
  );
}

export default App;
