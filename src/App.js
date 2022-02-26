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
      
      <ItemDetailContainer />
      

      
    
    </div>
  );
}



export default App;
