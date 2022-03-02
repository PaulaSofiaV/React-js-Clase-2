import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import ItemList from "./ItemList.js";
import { customFetch } from '../utils/customFetch';
import catalogo from "../utils/catalogo";



const ItemListContainer = () => {

    const[datos, setDatos] = useState([]);
    const[cargando, setCargando] = useState(false);
    const {idCategory} = useParams();

   

    useEffect(() => {
        setCargando(true)
        if(idCategory === undefined) {
            customFetch(2000, catalogo)
                .then(result => setDatos(result))
                .catch(error => console.log(error))
                .finally(() => setCargando(false))
        }else {
            customFetch(2000, catalogo.filter(item => item.categoryId === parseInt(idCategory)))
            .then(result => setDatos(result))
            .catch(error => console.log(error))
            .finally(() => setCargando(false))
        }
    }, [idCategory]);


    return (
        <>
        
            
            {cargando?  <p>Cargando</p> : <ItemList items={datos} />}
            
            
            
        </>
   
    );
}

export default ItemListContainer;