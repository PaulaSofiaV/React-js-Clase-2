import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount.js';
import Item from './components/Item';


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer cantidad="hola" />
      <ItemCount add="Agregaste ${incremento} unidades al Carrito"/>
   
 
    
    </div>
  );
}



export default App;
