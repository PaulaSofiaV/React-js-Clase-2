import { createContext, useState } from "react";

export const CartContext = createContext ([]); 



const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, cantidad) => {
        setCartList([
            ...cartList, 
            {
            id: item.id,
            name: item.name,
            image: item.image[0],
            cost: item.cost,
            cantidad: cantidad,
        }]);
    }
    
    const removeItem = (idProduct) => {
        setCartList(cartList.filter(item => (item.id !== idProduct)));
   }

   const clear = () => {
    setCartList([]);
}

    return <CartContext.Provider value={{cartList, addToCart}}>{children}</CartContext.Provider>
};

export default CartContextProvider;