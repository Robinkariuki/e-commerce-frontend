import React, {  useEffect, useState,Suspense } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Products from './products/pages/products';
// import Cart from './cart/pages/cart';
// import SignUp from './users/components/Auth/signUp';
// import Login from './users/components/Auth/login';
import MainNavigation from './shared/Navigation/MainNavbar';
import UserContext from './users/context/user-context';
import Axios from 'axios';
import LoadingSpinner from './shared/LoadingSpinner/loadingspinner';


const SignUp = React.lazy(()=>import('./users/components/Auth/signUp'));
const Cart = React.lazy(()=>import('./cart/pages/cart'));
const Login = React.lazy(()=>import('./users/components/Auth/login'));



const App =()=>{
const [userData, setUserData] = useState({
    token:undefined,
    user:undefined,

});
const [cartitems,setCartItems] =useState();
const getCartItems =async ()=>{
  const url =  process.env.REACT_APP_BACKEND_URL+'/cart/get-cart';
  await fetch(url)
  .then((response)=>response.json())
  .then((res)=>{
     
      setCartItems(res.data.items.length) 
  }).catch((error) => {
  throw error
 });
}


const checkLoggedIn = async () => {
    
  let token = localStorage.getItem("auth-token");    
  if (token === null){
    localStorage.setItem("auth-token","");
    token=""
  }
  
  const url = process.env.REACT_APP_BACKEND_URL+'/users/tokenIsValid'

const tokenResponse = await Axios.post(url,
  null,
  {headers:{'Authorization':`Bearer ${token}`}}
  
  ); 
  

  if (tokenResponse.data){

     const url =process.env.REACT_APP_BACKEND_URL+'/users/'
    const usersResponse = await Axios.get(url,{
      headers:{'Authorization':`Bearer ${token}`}
    });

   setUserData({
        token,
        user: usersResponse.data,
      });
     
  }

};

useEffect(() => {
  
  getCartItems()
  checkLoggedIn();
}, []);

return(
    
<Router>
<UserContext.Provider value={{ userData, setUserData,cartitems }}>

<MainNavigation/>
    <Switch>
      <Suspense fallback={<div className="center"><LoadingSpinner/></div> }>
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
            <Products checkLoggedIn={checkLoggedIn}/>
    </Route>
    </Suspense>
    </Switch>
    </UserContext.Provider> 
</Router>
);

}


export default App;