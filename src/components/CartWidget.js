import imagen from './107831.png'; 


function Carrito(props) {
    return (
        <>
            <img className="carritoImg" width="100" height="100" src={props.imagen}></img>
        </>
    );
}

export default Carrito;