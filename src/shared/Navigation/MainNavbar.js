import React from  'react';
import {NavLink} from 'react-router-dom';


const MainNavigation =()=>{
  
    return(
<nav className="navbar  heavy-rain-gradient ">
    <ul className="navbar-nav mr-auto">
    <NavLink to="/">
    <li className="navbar-brand">Market place</li> 
    </NavLink>
    </ul>
  <ul>
  <NavLink to="/cart">
  <i className="fas fa-shopping-cart"style={{marginRight:'5em'}}></i>
  </NavLink>
  <NavLink to ="profile">
   <i className="far fa-user"></i>
  </NavLink>
  </ul>
</nav>
    )
}


export default MainNavigation;