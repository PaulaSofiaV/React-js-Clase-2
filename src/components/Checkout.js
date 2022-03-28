import { Link } from "react-router-dom";


const Checkout = () => {
     return (
          <>
          <div className="checkout">
               <div className={`row`}>
                    <div>
                         <Link to='/' className="btn btn-info col-4 m-2">Back to Catalogue</Link>
                         <Link to='/cart' className="btn btn-info col-4 m-2">Checkout</Link>
                    </div>
               </div>
          </div>
          </>
     )
}

export default Checkout;