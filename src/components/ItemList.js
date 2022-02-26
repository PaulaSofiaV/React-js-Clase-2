import Items from "./Item";
import data from "../utils/catalogo";
    
const ItemList = ({items}) => {
    return (
        <>
        {items.map((producto) =>
        <Items 
            id={producto.id}
            title={producto.title}
            cost={producto.cost}
            image={producto.image}
            key={producto.id}
        />
        ) }
        </>
    );
}
   
export default ItemList;


