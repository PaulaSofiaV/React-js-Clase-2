import Items from "./Item";

    
const ItemList = ({items}) => {
    return (
        <>
        {items.map((producto) =>
        <Items 
            id={producto.id}
            title={producto.name}
            cost={producto.cost}
            image={producto.image}
            key={producto.id}
        />
        ) }
        </>
    );
}
   
export default ItemList;


