import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import ItemList from "./ItemList.js";
import { customFetch } from './utils/customFetch';

const { catalogo } = require("./utils/catalogo.js");


const ItemListContainer = () => {

    const[datos, setDatos] = useState([]);
    const {idCategory} = useParams();

    console.log(idCategory);

    useEffect(() => {
        if(idCategory === undefined) {
            customFetch(2000, catalogo[0])
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
            
        </>
   
    );
}

export default ItemListContainer;