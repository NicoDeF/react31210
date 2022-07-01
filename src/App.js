import React from "react";
//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import NavBar from "./Components/UI/NavBar/NavBar";
import ItemListCointainer from "./Components/UI/ItemListContainer/ItemListContainer"




const App = () => {
  return(
    <>
    <NavBar/>
    <ItemListCointainer marca ="Volkswagen"/>
    </>
    
  )
}
export default App