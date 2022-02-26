import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {
    const onAdd = (contador) => {
        alert(contador)
    }
     
     return (
          <>
          <div className="card1">
                <div className="card">
                    <img src={item.image} className="card-img-top" alt="imagen de almohadon logo cobra kai"/>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">Precio: {item.cost}</p>
                            <a href="#" className="btn btn-primary">id: {item.id}</a>
                        </div>
                </div>

            </div>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
          </>
     )
}

export default ItemDetail;






