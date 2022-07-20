import React, { useState } from 'react'
import { useCartContext } from '../../../context/CarContext';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) =>{
    const {img, name, description,id, price} = product
    const [goToCart, setGoToCart] = useState(false)
    const {addProduct} = useCartContext()


    const onAdd =(quantity) => {
        setGoToCart(true)
        addProduct(product, quantity)
    }
    
    return (
        <div className='container'>
        <div className='detail'>
        <img className='detail_image' src= {img} alt= '' />   
        <div className='content'>
        <h1>{name} </h1>
        <h2>Precio: {price}$</h2>
        <p>{description}</p>
        {
            goToCart
            ? <Link to='/cart'>Pagar compra</Link>     
            : <ItemCount stock={16} onAdd={onAdd} /> 
        } 
        <Link to='/'>Seguir comprando</Link>
        </div>
        </div>
        </div>
    );

    }
export default ItemDetail