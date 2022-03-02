import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import Navbar from "../components/Navbar";
import ItemCount from "../components/ItemCount";




const Home = () => {
    return(
        <BrowserRouter>
        
            <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/item" element={<ItemDetailContainer />} />
                    <Route path="/category/:idCategory" element={<ItemListContainer />} />
                    
                </Routes>
               
            <ItemCount />
        </BrowserRouter>
    );
}

export default Home;