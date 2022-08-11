import React, {useEffect,useState} from 'react'
import ItemDetail from '../ItemDetail/itemDetail';
import { useParams } from 'react-router-dom';
import { CircularProgress } from "@mui/material";
import { db } from "../../Firebase/Firebase"
import {doc, getDoc, collection} from "firebase/firestore";


const ItemDetailContainer = () =>{
    const [product, setProduct]=useState([])
    const [loading, setLoading]=useState(true)

    const {productId} = useParams()

useEffect(() => {
    const productsCollection = collection(db, "products");
        const refDoc = doc(productsCollection, productId)
        getDoc(refDoc).then(result => {
            setProduct({
                productId: result.id,
                ...result.data(),
            })
        })
        .finally(()=> setLoading(false))
        
        }, [productId])


    return (
        <>
        {loading ? <CircularProgress color ='success' /> : <ItemDetail product ={product}/>}
        </>
    );
}
export default ItemDetailContainer