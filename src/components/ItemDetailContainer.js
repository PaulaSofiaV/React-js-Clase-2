import { customFetch } from '../components/customFetch';
import { useState } from 'react';
import { useEffect } from 'react';




const {ItemDetail} = require("../components/ItemDetail.js")

function ItemDetailContainer() {
    const [products, setProducts] = useState([]);

    //componentDidMount - useEffect tenerlo en cuenta para no ejecutar dos veces

    useEffect(() => {

        customFetch(3000, ItemDetail)
          .then(response => setProducts(response))
          .catch(error => setProducts(error))
      
        }, [])

        return (
            <>
            

            <div>{products.map(item => <li>{item.name}</li>)} </div>
            
            </>
        )
}

export default ItemDetailContainer;

