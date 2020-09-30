import React, { Profiler, useEffect, useState } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Products from './products/pages/products';
import Cart from './cart/pages/cart';
import SignUp from './users/components/Auth/signUp';
import Login from './users/components/Auth/login';
import MainNavigation from './shared/Navigation/MainNavbar';
import UserContext from './users/context/user-context';





const App =()=>{
//  const { token, login, logout, userId } = useAuth();
const [userData, setUserData] = useState({
    token:undefined,
    user:undefined,

});

useEffect(() => {
  
  const abortController = new AbortController()
  const signal = abortController.signal

  const checkLoggedIn = async () => {
    
    let token = localStorage.getItem("auth-token");
    
    if (token === null){
      localStorage.setItem("auth-token","");
    }
    
    const url = "http://localhost:5000/api/users/tokenIsValid"
    let tokenResponse = await fetch(url,{
      method:"POST",
      body:null,
      headers:{
        'Authorization':`Bearer ${token}` 

        

      }
    })
    .then((tokenResponse)=>tokenResponse.json())
   console.log(tokenResponse.error)
    
 
    if (tokenResponse){
       const url ="http://localhost:5000/api/users/"
       const usersResponse = await fetch(url,{
         method:"GET",
         body:null,
         headers:{
          'Authorization':`Bearer ${token}` 
         }
       },{signal:signal})
       .then((userResponse)=>userResponse.json())
       .then((usersResponse)=>{
         console.log(usersResponse)
        setUserData({
          token,
          user:usersResponse.user
        })

       })
      
     
       
    }

  }

  checkLoggedIn();
  return function cleanup(){
    abortController.abort()
  }
}, []);

return(
    
<Router>
<UserContext.Provider value={{ userData, setUserData }}>
  {userData.token}
<MainNavigation/>
    <Switch>
<Route path="/signup">
        <SignUp/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/cart">
        <Cart/>
    </Route>
    <Route path="/" exact>
            <Products/>
    </Route>
    </Switch>
    </UserContext.Provider> 
</Router>
)

}


export default App;