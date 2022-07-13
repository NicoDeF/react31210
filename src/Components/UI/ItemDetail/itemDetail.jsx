import React, { useState } from 'react'
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) =>{
    const {img, name, description,id} = product
    const [goToCart, setGoToCart] = useState(false)

    const onAdd =(quantity) => {
        setGoToCart(true)
    }
    
    return (
        <div className='container'>
        <div className='detail'>
        <img className='detail_image' src= {img} alt= '' />   
        <div className='content'>
        <h1>{name } </h1>
        <p>{description}</p>
        {
            goToCart
            ? <Link to='/cart'>Pagar compra</Link>
            : <ItemCount stock={16} onAdd={onAdd} /> 
        } 
        </div>
        </div>
        </div>
    );

    }
export default ItemDetail