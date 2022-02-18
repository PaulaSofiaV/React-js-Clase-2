import { customFetch } from '../components/customFetch';
import { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from '../components/ItemDetail';



const {Item} = require("../components/Item.js")

const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);
    


    //componentDidMount - useEffect tenerlo en cuenta para no ejecutar dos veces

    useEffect(() => {

        customFetch(3000, ItemDetail)
          .then(response => setProducts(response))
          .catch(error => setProducts(error))
      
        }, [])

        return (
            <>
               
                    <ItemDetail 
                      id={products.id}
                      name={products.name}
                      image={products.image}
                      cost={products.cost}
                   
                      />
               
                    
             
                
            </>
        );
}

export default ItemDetailContainer;

