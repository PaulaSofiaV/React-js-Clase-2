import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {
    const onAdd = (contador) => {
        alert(contador)
    }
     
     return (
          <>
          
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
          </>
     )
}

export default ItemDetail;






