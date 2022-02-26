import { useState } from "react";

const ItemCount = ({initial, stock, onAdd}) => {

     
        

        
        const [contador, setContador] = useState (initial); //HOOKs para crear los estados de los componentes
        

        const mas = () => {
           if (contador < stock){
            setContador(contador+1);
           }
            //console.log(incremento)
        }

        const menos = () => {
            if (contador > initial)
            setContador(contador-1)
        }

       
      
            
// alert(add);
//  setIncremento(initial);

    return (
        <div>
            
        
            <div className="btn p-3 d-flex flex-row justify-content-center align-items-center" role="group" aria-label="Basic mixed styles example">
                <button onClick={menos} type="button" className="btn btn-danger m-3">-</button>
                <p className="incremento">{contador}</p>
                <button onClick={mas} type="button" className="btn btn-success m-3">+</button>
                <hr/>
                <button onClick={() => onAdd(contador)} type="button" className="btn btn-primary">Añadir al Carrito</button>
            </div>
            
        </div>
    )
}

export default ItemCount;