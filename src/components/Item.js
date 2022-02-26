import react from "react";


const Item = ({ id , title , image , cost }) => {
    
    return (
          <>
            <div className="card1">
                <div className="card">
                    <img src={image} style={{width: "18rem"}} className="card-img-top" alt={title}/>
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
