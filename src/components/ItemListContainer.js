import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import ItemList from "./ItemList.js";
import { customFetch } from '../utils/customFetch';
import catalogo from "../utils/catalogo";



const ItemListContainer = () => {

    const[datos, setDatos] = useState([]);
    const {idCategory} = useParams();

   

    useEffect(() => {
        if(idCategory === undefined) {
            customFetch(2000, catalogo)
                .then(result => setDatos(result))
                .catch(error => console.log(error))
        }else {
            customFetch(2000, catalogo.filter(item => item.categoryId === parseInt(idCategory)))
            .then(result => setDatos(result))
            .catch(error => console.log(error))
        }
    }, [idCategory]);


    return (
        <>
            <ItemList items={datos} />
            <p>Paula</p>
        </>
   
    );
}

export default ItemListContainer;