import React from  'react';
import {NavLink} from 'react-router-dom';
import './MainNavbar.css'


const MainNavigation =()=>{
  
    return(
//  <nav className="navbar mean-fruit-gradient ">
//     <ul className="navbar-nav mr-auto">
//     <NavLink to="/" className="linkText">
//     <li className="navbar-brand">Market place</li> 
//     </NavLink>
//     </ul>
//   <ul>
//     <li className="justify-content-center"><NavLink to="/cart" className="linkText">
//   <i className="fas fa-shopping-cart"style={{marginRight:'5em'}}></i>
//   </NavLink></li>


   
//   </ul>
// </nav> 
<nav class="mb-1 navbar navbar-expand-lg mean-fruit-gradientt ">
<NavLink to="/">
  <a class="navbar-brand">Products</a>
   </NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
    <ul class="navbar-nav ml-auto nav-flex-icons">
   
      <li class="nav-item ">
      <NavLink to="/cart">
        <a class="nav-link waves-effect waves-light linkText">
          <i class="fas fa-shopping-cart"></i>
        </a>
        </NavLink>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-user"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right dropdown-default"
          aria-labelledby="navbarDropdownMenuLink-333">
          <NavLink to='/login'>
          <a class="dropdown-item" href="#">Login</a>
          </NavLink>
          <NavLink to="/signup">
          <a class="dropdown-item" href="#">Sign Up</a>
          </NavLink>
          <NavLink to='logout'> 
          <a class="dropdown-item" href="#">Log Out</a>
          </NavLink>
        </div>
      </li>
    </ul>
  </div>
</nav>

    )
}


export default MainNavigation;