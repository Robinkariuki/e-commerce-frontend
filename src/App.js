import React, { Profiler } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Products from './products/pages/products';
import Cart from './cart/pages/cart';
import Profile from './profile/pages/profile';



const App =()=>{


    
return(
<Router>
<Route path="/profile">
        <Profile/>
    </Route>
    <Route path="/cart">
        <Cart/>
    </Route>
    <Route path="/" exact>
            <Products/>
    </Route>
</Router>
)

}


export default App;