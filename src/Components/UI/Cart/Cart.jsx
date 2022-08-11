import React, { useContext } from "react";
import { cartContext } from '../../../context/CarContext'
import "./Cart.css"
import { Link, useNavigate } from "react-router-dom"


const Cart = () => {
    const { products,addProduct,clear,qtyProducts,calcularTotal, deleteProduct}  = useContext(cartContext)
    const navegar = useNavigate()


    return (
        <>
        {
            products.length === 0 
            ?   <div className="carritoVacio">
                  <h2>Tu carrito esta vacio siga comprando <Link to={"/"}>aqui</Link></h2>
                  
                </div>
            : <div>
            <h1 className="carritoh1">Carrito</h1>
            <div>
                {products.map((prod) => (
                    <div className="divCarrito" key={prod.id}>
                        <img className="imgCart" src={prod.img} alt="Carrito" />
                        <h3>Producto: {prod.name}</h3>
                        <h3>${prod.price}</h3>
                        <h4>Cantidad: {prod.qty}</h4>
                        <button className="delete" onClick={() => deleteProduct(prod.id)}>Eliminar</button>
                    </div>
                ))}
            </div>
            <div className="buttonYtotal">
                <h2 className="carritoh2">Total: ${calcularTotal()}</h2>
                <button className="buttonCarrito" onClick={clear}>Vaciar Carrito</button>
                <button  className="buttonCarrito" onClick={()=> navegar('/checkout')}>Finalizar Compra</button>
            </div>
            
        </div>
        }
        </>
    );
};

export default Cart;

