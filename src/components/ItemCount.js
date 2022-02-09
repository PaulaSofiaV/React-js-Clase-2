import { useState } from "react";

const ItemCount = (props) => {

        let stock = 5;
        let initial = 0;
        let onAdd = 5;



        const [incremento, setIncremento] = useState (stock); //HOOKs para crear los estados de los componentes
        

        const mas = () => {
           if (incremento < stock){
               setIncremento(incremento+1);
           }
            //console.log(incremento)
        }

        const menos = () => {
            if (incremento > initial)
            setIncremento(incremento-1)
        }

        const Add = () =>{
            alert("Agregaste ${incremento} unidades al Carrito");
            setIncremento(props.initial);
        }

    return (
        <div>
            <p className="text-center fs-3">Almohadon</p>
        
            <div className="btn p-3 d-flex flex-row justify-content-center align-items-center" role="group" aria-label="Basic mixed styles example">
                <button onClick={menos} type="button" className="btn btn-danger m-3">-</button>
                <p className="incremento">{incremento}</p>
                <button onClick={mas} type="button" className="btn btn-success m-3">+</button>
                <hr/>
                <button onClick={Add} type="button" class="btn btn-primary">Añadir al Carrito</button>
            </div>
            
        </div>
    )
}

export default ItemCount;