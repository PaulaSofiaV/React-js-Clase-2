import { Link } from "react-router-dom";


const ItemNotAviable = () => {
     return (
          <>
          <div className="itemCount">
               {/* <div>
                    <input className={styles.notAvailable_email} placeholder='Enter your email here'></input>
               </div> */}
               <div className="row">
                    {/* <button className={styles.notAvailable_btn}>Email me when it's back</button> */}
                    <div>
                         <Link to='/' className="btn btn-info col m-2">Back to Catalogue</Link>
                    </div>
               </div>
          </div>
          </>
     )
}

export default ItemNotAviable;