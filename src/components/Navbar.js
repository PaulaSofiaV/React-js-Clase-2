import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./intento-de-logo.jpg"
import Carrito from "./CartWidget.js";
import imagen from './107831.png'; 



const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand text-white fs-2" href="#">
                    <img src={logo} alt="" width="100" height="100" className="d-inline-block align-text-center "/>
                        Diseño textil
                    </a>
                </div>
            </nav>
            <div className="navbar2">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand nav-link disabled text-white" href="#">Porductos</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active text-white" aria-current="page" href="#">Almohadones</a>
                                <a className="nav-link text-white" href="#">Cartucheras</a>
                                <a className="nav-link text-white" href="#">Llaveros</a>
                                <a className="nav-link text-white" href="#">Barbijos</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
               
                    <div className="d-flex flex-row">
                        <Carrito imagen={imagen}/> 
                        
                    </div>

        </div>

    );
}

export default Navbar;