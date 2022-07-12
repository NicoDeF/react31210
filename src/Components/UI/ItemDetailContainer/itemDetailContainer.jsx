import React, {useEffect,useState} from 'react'
import ItemDetail from '../ItemDetail/itemDetail';
import {getOne} from '../../mocks/fakeApi'
import { useParams } from 'react-router-dom';
import { CircularProgress } from "@mui/material";


const ItemDetailContainer = () =>{
    const [product, setProduct]=useState([])
    const [loading, setLoading]=useState(true)

    const {productId} = useParams()

useEffect(() => {
    getOne(productId)
    .then((res) => {
        setProduct(res)
        console.log(productId)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        setLoading(false)
    })
    } ,[productId])


    return (
        <>
        {loading ? <CircularProgress color ='success' /> : <ItemDetail product ={product}/>}
        </>
    );
}
export default ItemDetailContainer