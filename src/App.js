import React from "react";
import NavBar from "./Components/UI/NavBar/NavBar";
import ItemListCointainer from "./Components/UI/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/UI/ItemDetailContainer/itemDetailContainer";
import Cart from  "./Components/UI/Cart/Cart.jsx";
import{ 
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import CartProvider from "./context/CarContext";



const App = () => {
  return(
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <Routes>
    <Route  path='/'                     element={<ItemListCointainer/>} /> 
    <Route  path='/category/:categoryId' element={<ItemListCointainer/>}  />
    <Route  path='/category/:productId'  element={<ItemDetailContainer/>} />
    <Route  path='/detail/:productId'    element={<ItemDetailContainer/> } />
    <Route  path='/cart'                 element={<Cart/> } />
    </Routes>
    </CartProvider>

    </BrowserRouter>
  )
}
export default App

