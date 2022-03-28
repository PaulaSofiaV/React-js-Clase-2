import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { CartContext } from './CartContext';
import { useContext } from 'react';

const CartWidget = (props) => {
     const cartList = useContext(CartContext);
 
  

     return (
          <>
         <Badge badgeContent={4} color="light">

               <ShoppingCartOutlined />
          </Badge>
          </>
     );
}

export default CartWidget;



















/*
function Carrito(props) {
    return (
        <>
            <img className="carritoImg" width="100" height="100" src={props.imagen}></img>
        </>
    );
}

export default Carrito;
*/