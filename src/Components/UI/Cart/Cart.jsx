import React from 'react'
import {useCartContext } from '../../../context/CarContext'
import {Link} from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'


const Cart = () => {

    const {cart, totalPrice} = useCartContext()

    if (cart.lenght === 0 ){
    return (
        <>
        <p>El carrito se encuentra vacio</p>
        <Link to='/'>Volver a comprar</Link>
        </>
    )
}

    return( 
        <>
        {
            cart.map (product => <ItemCart key={product.id} product={product} />)
        }
        <p>
            Total: {totalPrice()}
        </p>
        </>
    )
}
export default Cart