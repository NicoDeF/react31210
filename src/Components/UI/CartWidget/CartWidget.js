import React,{useContext} from 'react';
import { cartContext } from '../../../context/CarContext';
import carrito from "../../../assets/comprar.png";

const CartWidget = () => {

  const {qtyProducts} = useContext(cartContext);

  return (
    <>
    <button className="carrito">
      <img className="imgCarrito" src={carrito} alt="carrito"/>
      <p className="number">{qtyProducts}</p>
    </button>
    </>
  );
};

export default CartWidget;
