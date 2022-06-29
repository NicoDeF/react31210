import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemListContainer.css'


const ItemListCointainer = ({marca}) => {

    const onAdd = (cant) => {
        console.log(`Se agrego ${cant}`)
    }

return(
    <>
    <h2> Lista de Autos : {marca} </h2>
    <ItemCount model='Siroco' stock={5}  onAdd={onAdd}/>
    </>
)}

export default ItemListCointainer