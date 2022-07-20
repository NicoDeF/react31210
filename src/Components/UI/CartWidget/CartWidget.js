import React from 'react';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { useCartContext } from '../../../context/CarContext';

const CartWidget = () =>{
    const {totalProducts} = useCartContext()
return (
    <>
<ShoppingCartTwoToneIcon  fontSize="large">
{totalProducts || ''} 
</ShoppingCartTwoToneIcon>  

</>
)
}

export default CartWidget

