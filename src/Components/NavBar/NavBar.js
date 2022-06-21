import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import "./NavBar.css";
import carlogo from "../../assets/carlogo.jpg"

const menuItems =[
{
  id:1,
  label:"Usados",
  
},
{
  id:2,
  label:"0km"
}
]
 const NavBar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 3 }}
          >
            <MenuIcon />
          </IconButton>
          <ShoppingCartTwoToneIcon  fontSize="large"  />
          
          <Button color="inherit" 
          size='large' 
          onClick={() => {
          alert('Logueado');
  }}>   
            Login</Button>
          <div>
            {menuItems.map((item) => (
              <a href='/' className='nav-item' key = {item.id}>
                {item.label}
              </a>
            ))}
            </div>

        
              <img src = {carlogo} alt= "carlogo Icon" className='img' />
          
            
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
};

export default NavBar
