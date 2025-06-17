import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1 >Infinite Scroll Products</h1>
      <ProductList />
    </div>
  );
};

export default App;
