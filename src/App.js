import React from "react";
import NavBar from "./Components/UI/NavBar/NavBar";
import ItemListCointainer from "./Components/UI/ItemListContainer/ItemListContainer"


const App = () => {
  return(
    <>
    <NavBar/>
    <ItemListCointainer greeting ="Peugeot"/>
    </>
    
  )
}
export default App