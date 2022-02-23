import { useState } from 'react';
import { useParams } from "react-router";
import { useEffect } from 'react';
import { customFetch } from '../components/customFetch';
import ItemDetail from '../components/ItemDetail';


const { catalogo } = require("../components/catalogo.js");

const ItemDetailContainer = () => {
  const [dato, setDato] = useState([]);
    

  

    //componentDidMount - useEffect tenerlo en cuenta para no ejecutar dos veces

    useEffect(() => {
      customFetch(3000, catalogo[0])
      .then(result => setDato(result))
      .catch(error => console.log(error))

    }, []);

        return (
            <>
               
                    <ItemDetail 
                      item={dato}
                   
                      />
                      
             
                
            </>
        );
}

export default ItemDetailContainer;
