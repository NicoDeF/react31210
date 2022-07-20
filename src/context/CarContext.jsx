import React, {useState, useContext} from 'react'

const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id)
        newCart.push({ ...item, quantity:newQuantity})
        setCart(newCart)
    }

    console.log('carrito :', cart)

    const cleanCart = () => setCart([])

    const isInCart = (id) => {
        return cart.find(product => product.id ===id)
        ? true
        : false
    }

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev = act.quantity * act.price, 0)
    }

    const totalProds = () => cart.reduce((acum, actualProduct) => acum + actualProduct.quantity, 0)

    
    return (
        <CartContext.Provider value = {{
            addProduct,
            cleanCart,
            isInCart,
            removeProduct,
            totalPrice,
            totalProds,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider