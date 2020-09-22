import React, { Profiler } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Products from './products/pages/products';
import Cart from './cart/pages/cart';
import SignUp from './users/components/Auth/signUp';
import Login from './users/components/Auth/login';
import MainNavigation from './shared/Navigation/MainNavbar';




const App =()=>{
//  const { token, login, logout, userId } = useAuth();
    
return(
    
<Router>
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
</Router>
)

}


export default App;