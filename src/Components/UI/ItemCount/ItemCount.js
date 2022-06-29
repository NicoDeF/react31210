import React from 'react'
import {useState} from 'react'
import Button from '@mui/material/Button';
import './ItemCount.css'

function ItemCount ({stock,model, onAdd }) {
    const [amount,setAmount] = useState (1)

    const cont = (value) => {
        const result = amount + value
        if (result <= stock && result>= 1 )
        setAmount (amount + value)

    } 
const agregarCant = () => {
    onAdd(amount)
}

    return (
        <> 
        <div className='container'>
        <Button className='boton1' variant="text"  onClick={()=>cont(-1)}>-</Button>
        <span>{amount}</span>
        <Button className='boton1' variant="text"    onClick={()=>cont(+1)}>+</Button>
        <span>{model}</span>
        </div>
        <Button variant="contained"  
         onClick= {agregarCant} >Agregar al carrito</Button>
        </>
    )
    }
        
    export default ItemCount;

