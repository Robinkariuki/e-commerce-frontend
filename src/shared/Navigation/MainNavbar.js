import React from  'react';
import {NavLink} from 'react-router-dom';
import './MainNavbar.css'


const MainNavigation =()=>{
  
    return(
<nav className="navbar mean-fruit-gradient ">
    <ul className="navbar-nav mr-auto">
    <NavLink to="/" className="linkText">
    <li className="navbar-brand">Market place</li> 
    </NavLink>
    </ul>
  <ul>
  <NavLink to="/cart" className="linkText">
  <i className="fas fa-shopping-cart"style={{marginRight:'5em'}}></i>
  </NavLink>
  <NavLink to ="profile" className="linkText">
   <i className="far fa-user"></i>
  </NavLink>
  </ul>
</nav>
    )
}


export default MainNavigation;