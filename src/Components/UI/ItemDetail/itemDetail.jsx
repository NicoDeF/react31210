import React, { useState,useContext } from 'react'
import { cartContext } from '../../../context/CarContext';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import "./itemDetail.css"

const ItemDetail = ({product}) =>{
    const {img, name, description,id, price} = product
    const [goToCart, setGoToCart] = useState(false)
    const {addProduct} = useContext(cartContext)


    const onAdd =(quantity) => {
        setGoToCart(true)
        addProduct(product, quantity)
    }
    
    return (
        <div>
        <img className='imgItemDetail' src= {img} alt= '' />   
   
        <h1 className='hItemDetail'>{name} </h1>
        <h2 className='hItemDetail'>Precio: {price}$</h2>
        <p>{description}</p>
        {
            goToCart
            ? <Link to='/cart'>Pagar compra</Link>     
            : <ItemCount stock={16} onAdd={onAdd} /> 
        } 
        <Link to='/'>Seguir comprando</Link>
        </div>
    )
    }
export default ItemDetail