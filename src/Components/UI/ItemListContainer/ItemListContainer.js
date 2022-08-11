import React from "react";
import { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import { getData } from '../../mocks/fakeApi.js'
import { CircularProgress } from "@mui/material";
import { useParams } from 'react-router-dom'
import { db } from "../../Firebase/Firebase"
import { getDocs, collection, query, where } from "firebase/firestore";



const ItemListCointainer =() => {

  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true)

  const {categoryId} = useParams()
  

  useEffect (() => {

    const q = categoryId
    ? query (collection(db, "products"), where("category", "==", categoryId))
    : collection (db, "products")

    getDocs(q)
    .then(result =>{
       const lista = result.docs.map(product => {
        return{
            id: product.id,
            ...product.data(),
        }
        })
        setProductList (lista)
    })

    .catch((error) => console.log(error))
    .finally(()=> setLoading(false))

}, [categoryId])

    

return(
    <>
    {loading ? <CircularProgress color ='success' /> : <ItemList productList={productList} />}
    </>
)
}

export default ItemListCointainer


//Old Return

//return(
//  <>
//  <h1> Lista de Autos : {marca} </h1>
//  <ItemCount model='Siroco' stock={5}  onAdd={onAdd}/>
//  {loading ? <p> Loading.. </p> :
//  <ItemList productList={productList}/>
//}
//  </>

