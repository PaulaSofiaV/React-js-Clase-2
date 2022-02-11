

const Item = (props) => {
    
    return (
          <>
            <div className="card1">
                <div className="card" style="width: 18rem;">
                    <img src={props.pictureUrl} className="card-img-top" alt="imagen de almohadon logo cobra kai"/>
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">Precio: {props.price}</p>
                            <a href="#" className="btn btn-primary">id: {props.id}</a>
                        </div>
                </div>

            </div>
        </>
    )

   }

export default Item;