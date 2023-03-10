import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products'
import { Switch, Route } from 'react-router-dom';
import Product from './components/Product';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Home />
      </Switch>
    </>
  );
}

export default App;
