import React from "react";
import { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import { getData } from '../../mocks/fakeApi.js'
import { CircularProgress } from "@mui/material";
import { useParams } from 'react-router-dom'



const ItemListCointainer =() => {

  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true)

  const {categoryId} = useParams()
  


        const getProducts = async () => {
          setLoading(true)
            try{
              const respuesta = await getData(categoryId)
              setProductList(respuesta)
            }catch(error){
              console.log(error)
            }finally{
              setLoading(false)
            }
          }
      
          useEffect(()=>{
            getProducts(categoryId)
          },[categoryId])
    

return(
    <>
    <h1> Lista de Autos:</h1>
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

