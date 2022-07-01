import React from "react";
import { useEffect, useState } from 'react'
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import { getData } from '../../mocks/fakeApi.js'


const ItemListCointainer = ({marca}) => {

  const [productList, setProductList]=useState([])
  const [loading, setLoading]=useState(true)

    const onAdd = (cant) => {
        console.log(`Se agrego ${cant}`)

    }
        const getProducts = async () => {
            try{
              const respuesta = await getData
              setProductList(respuesta)
            }catch(error){
              console.log(error)
            }finally{
              setLoading(false)
            }
          }
      
          useEffect(()=>{
            getProducts()
          },[])
    

return(
    <>
    <h1> Lista de Autos : {marca} </h1>
    <ItemCount model='Siroco' stock={5}  onAdd={onAdd}/>
    {loading ? <p> Loading.. </p> :
    <ItemList productList={productList}/>
}
    </>
)
}

export default ItemListCointainer