import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer cantidad="hola" />
    
    </div>
  );
}



export default App;
