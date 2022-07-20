import React from "react";
import { useCartContext } from "../../../context/CarContext";


const ItemCart = ({product}) => {
const {removeProduct} = useCartContext()

    const {name,price, quantity,id,img} = product


    return(

        <div className='itemCart'>
        <div className='detail'>
        <img className='detail_image' src= {img} alt= {name} />   
        <div className='content'>
        <p>Cantidad: {quantity}</p>
        <p>Precio unidad:{price}$</p>
        <p>Subtotal:{quantity*price}</p>

        <button onClick={() => removeProduct(id)}>Eliminar</button>
        </div>
        </div>
        </div>
    );

    }
export default ItemCart
    
