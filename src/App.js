import React from "react";
import NavBar from "./Components/UI/NavBar/NavBar";
import ItemListCointainer from "./Components/UI/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/UI/ItemDetailContainer/itemDetailContainer";




const App = () => {
  return(
    <>
    <NavBar/>
    <ItemListCointainer marca ="Volkswagen"/>
    <ItemDetailContainer/>
    </>
  )
}
export default App