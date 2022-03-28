import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";




const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (contador) => {
        alert(contador);
        setItemCount(contador);
        test.addToCart(item, contador);
    }
     
     return (
          <>
            <div className="card1">
                <div className="container-fluid">
                    <div className="row d-flex justify-center my-3">
                        <img src={item.image} style={{width: "18rem"}} className="card-img-top" alt={item.title}/>
                            <div className="card-body">
                                <h5 className="card-title text-center">{item.title}</h5>
                                <p className="card-text text-center">Precio: ${item.cost}</p>
                                <p className="stock text-center">Stock: {item.stock} unidades</p>
                                <p className="id text-center">id: {item.id}</p>
                                <p className="btn btn-outline-light d-grid gap-2 col-6 mx-auto">Comprar</p>
                            </div>
                            <div>
                              <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>

                              
                            </div>
                    </div>
                </div>

            
            </div>
            </>
     )
}

export default ItemDetail;






