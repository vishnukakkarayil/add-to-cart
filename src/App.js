import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/common/Header'
import Home from './components/pages/home/Home'
import Cart from './components/pages/cart/Cart'

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header />
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
      </Router>
      
    </div>
  );
}

export default App;
