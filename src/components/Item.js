import react from "react";
import ItemCount from "./ItemCount";

const Item = ({ id , title , image , cost, stock }) => {
    const onAdd = (contador) => {
        alert(contador)
    }
    return (
          <>
            <div className="card1">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center my-3">
                        <img src={image} style={{width: "18rem"}} className="card-img-top" alt={title}/>
                            <div className="card-body">
                                <h5 className="card-title text-center">{title}</h5>
                                <p className="card-text text-center">Precio: ${cost}</p>
                                <p className="stock text-center">Stock: {stock} unidades</p>
                                <p className="id text-center">id: {id}</p>
                                <p className="btn btn-outline-light d-grid gap-2 col-6 mx-auto">Comprar</p>
                            </div>
                            <div>
                            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )

   }

export default Item;
