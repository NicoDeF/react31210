import React, {useEffect,useState} from 'react'
import ItemDetail from '../ItemDetail/itemDetail';
import {getOne} from '../../mocks/fakeApi'
import { useParams } from 'react-router-dom';
import { CircularProgress } from "@mui/material";


const ItemDetailContainer = () =>{
    const [product, setProduct]=useState([])
    const [loading, setLoading]=useState(true)

    const {id} = useParams()

useEffect(() => {
    getOne(id)
    .then((res) => {
        setProduct(res)
        console.log(product)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        setLoading(false)
    })
    } ,[id])


    return (
        <>
        {loading ? <CircularProgress color ='success' /> : <ItemDetail product ={product}/>}
        </>
    );
}
export default ItemDetailContainer