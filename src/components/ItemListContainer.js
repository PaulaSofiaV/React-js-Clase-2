

const ItemListContainer = (props) => {
    return (
        <>
            <p className="numCarrito">{props.cantidad}</p>
            <img className="producto1" width="100" height="100" src={props.imagen}></img>
            
        </>
   
    );
}

export default ItemListContainer;