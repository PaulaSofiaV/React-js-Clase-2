import react from "react";


const Item = ({ id , title , image , cost }) => {
    
    return (
          <>
            <div className="card1">
                <div className="card" style="width: 18rem;">
                    <img src={image} className="card-img-top" alt="imagen de almohadon logo cobra kai"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">Precio: {cost}</p>
                            <p className="btn btn-primary">id: {id}</p>
                        </div>
                </div>

            </div>
        </>
    )

   }

export default Item;
