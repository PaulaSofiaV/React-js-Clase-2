import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { customFetch } from '../utils/customFetch';
import ItemDetail from '../components/ItemDetail';
import catalogo from "../utils/catalogo";
import ItemCount from './ItemCount';


const ItemDetailContainer = () => {
  const [dato, setDato] = useState([]);
  const[cargando, setCargando] = useState(false);

  

    //componentDidMount - useEffect tenerlo en cuenta para no ejecutar dos veces

    useEffect(() => {
      setCargando(true)
      customFetch(3000, catalogo[0])
      .then(result => setDato(result))
      .catch(error => console.log(error))
      .finally(() => setCargando(false))

    }, []);

        return (
            <>
               {cargando?  <p>Cargando</p> : <ItemDetail item={dato}/> }
             
                      
             
                
            </>
        );
}

export default ItemDetailContainer;
