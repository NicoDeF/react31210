import React from 'react'

const ItemDetail = ({product}) =>{
    const {img, name, description,id} = product
    return (
        <div className='container'>
        <div className='detail'>
        <img className='detail_image' src= {img} />   
        <div className='content'>
        <h1>{name} </h1>
        <p>{description}</p>
        </div>
        </div>
        </div>
    );

    }
export default ItemDetail