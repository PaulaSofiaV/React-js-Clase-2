import Items from "./Item";
import ItemCount from "./ItemCount";

    
const ItemList = ({items}) => {
    return (
        <>
            

        {items.map((producto) =>
        <Items 
            id={producto.id}
            title={producto.name}
            cost={producto.cost}
            image={producto.image}
            stock={producto.stock}
            key={producto.id}
            />
            ) }
            

        
        </>
    );
}
   
export default ItemList;


