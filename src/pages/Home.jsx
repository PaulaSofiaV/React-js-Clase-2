import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import Navbar from "../components/Navbar";
import CartContextProvider from "../components/CartContext";
import Cart from "../components/cart";




const Home = () => {
    
    return(
        <CartContextProvider>
        <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/item" element={<ItemDetailContainer />} />
                    <Route path="/category/:idCategory" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
               
        </BrowserRouter>
        </CartContextProvider>
    );
}

export default Home;