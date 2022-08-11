import * as React from 'react';
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom'

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
},
{
  id:3,
  label:"Motorbikes",
  route:'/category/motorbikes'

}
]
 const NavBar = () => {

 
    return (
      <nav>
        <h1>  KabaK </h1>
        <ul>
          {menuItems.map((menuItems) => (<Link to={menuItems.route} key={menuItems.id}>{menuItems.label}</Link> ))}
          <Link to={"/cart"}>
          <CartWidget />
          </Link>
          
        </ul>
      
      </nav>
    )
  }
  
  export default NavBar;