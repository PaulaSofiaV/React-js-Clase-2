import catalogo from "../utils/catalogo";

const Item = ({ id , title , image , cost }) => {
    
    return (
          <>
            <div className="card1">
                <div className="card" style="width: 18rem;">
                    <img src={catalogo.image[0]} className="card-img-top" alt="imagen de almohadon logo cobra kai"/>
                        <div className="card-body">
                            <h5 className="card-title">{catalogo.title[0]}</h5>
                            <p className="card-text">Precio: {catalogo.cost[0]}</p>
                            <a href="#" className="btn btn-primary">id: {catalogo.id[0]}</a>
                        </div>
                </div>

            </div>
        </>
    )

   }

export default Item;
