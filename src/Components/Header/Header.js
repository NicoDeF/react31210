import React from "react"
import logo  from  "../../assets/carlogo.jpg"
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
//import "./Header.css"

const Header = () => {
    return (
        <header style = {styles.container}>
        <img style = {styles.imagen} src={logo} alt="" /> 
        <h1>Mi tienda online</h1>
        <nav>
            <a style = {styles.anchors} href="">Categoria 1</a>
            <a style = {styles.anchors} href="">Categoria 2</a>
            <a style = {styles.anchors} href="">Categoria 3</a>
        </nav>
        <ShoppingCartTwoToneIcon fontSize="large"/>
        </header>
    )
}

//Css con objetos
const styles = {
    container:{
        display:'flex',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    imagen:{
        width: '10%',
    },
    anchors: {
        padding:10
    },
}

export default Header