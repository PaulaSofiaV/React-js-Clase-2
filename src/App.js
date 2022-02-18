import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount.js';
import ItemDetailContainer from "./components/ItemDetailContainer.js";





function App() {
  

  return (
    <div>
      <Navbar />
      <ItemListContainer cantidad="hola" />
      <ItemCount add="Agregaste ${incremento} unidades al Carrito"/>
      <ItemDetailContainer />


      
    
    </div>
  );
}



export default App;
