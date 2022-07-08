import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./NavBar.css";
import carlogo from  '../../../assets/carlogo.jpg'
import CartWidget from '../CartWidget/CartWidget';
import  {Link, NavLink} from 'react-router-dom'

const menuItems =[
{
  id:1,
  label:"Usados",
  route:'/category/used'
},
{
  id:2,
  label:"0km",
  route:'/category/new'
}
]
 const NavBar = () => {
  return (
    <div className='navbar'>
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
          <Button color="inherit" 
          size='large' onClick={() => { alert('Logueado'); }}> Login</Button>
          <div className='itemlist'>
            {menuItems.map((item) => (
              <NavLink className='nav-item' key = {item.id} to={item.route}>
                {item.label}
                </NavLink> 
            ))}
            </div>

            <Link to="/cart"><CartWidget/> </Link>
        
            <Link to="/"><img src = {carlogo} alt= "carlogo Icon" className='img' /> </Link>
          
            
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
};

export default NavBar
