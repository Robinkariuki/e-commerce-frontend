import React, { useContext } from  'react';
import {NavLink} from 'react-router-dom';
import './MainNavbar.css'
import UserContext from'../../users/context/user-context';

const MainNavigation =()=>{

const {userData,setUserData} =useContext(UserContext);


  const logout =()=>{
    setUserData({
      token:undefined,
      user:undefined
    })
    localStorage.setItem("auth-token","");
  }


    return(
     

<nav className="mb-1 navbar navbar-expand-lg mean-fruit-gradientt ">
<NavLink to="/">
  <span className="navbar-brand">Products</span>
  
   </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
    <ul className="navbar-nav ml-auto nav-flex-icons">
   
      <li className="nav-item ">
        {userData.user ?(
          <NavLink to="/cart">
          <span className="nav-link waves-effect waves-light linkText">
            <i className="fas fa-shopping-cart"></i>
          </span>
          </NavLink>
        ):(
          <NavLink to="/signup">
          <span className="nav-link waves-effect waves-light linkText">
            <i className="fas fa-shopping-cart"></i>
            <span className="lblCartCount">
            0
          </span>
          </span>
          </NavLink>
        )}
      
      </li>
      <li className="nav-item dropdown">
        <span className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-user"></i>
        </span>
        <div className="dropdown-menu dropdown-menu-right dropdown-default"
          aria-labelledby="navbarDropdownMenuLink-333">
            {userData.user ?(
                 <NavLink to='/'> 
                 <span className="dropdown-item" onClick={(e)=>logout()}>Log Out</span>
                 </NavLink>
            ):(
              <div>
              <NavLink to='/login'>
              <span className="dropdown-item">Login</span>
              </NavLink>
              <NavLink to="/signup">
              <span className="dropdown-item">Sign Up</span>
              </NavLink>
              </div>
            )}
         
      
        </div>
      </li>
    </ul>
  </div>
</nav>

    )
}


export default MainNavigation;