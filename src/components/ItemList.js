import Items from "./Item";
import data from "./catalogo";
    
const ItemList = () => {
    return (
        <>
        
        <Items 
            id={data[0].id}
            title={data[0].title}
            price={data[0].price}
            pictureUrl={data[0].pictureUrl}
            
        />
        </>
    );
}
   
export default ItemList;


