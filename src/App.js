import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount.js';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer cantidad="hola" />
      <ItemCount />
    
    </div>
  );
}



export default App;
