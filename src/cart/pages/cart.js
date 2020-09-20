import React,{useState,useEffect} from 'react';
import CartList from '../components/cartList';




const Cart =()=>{
    const [Cartitems, setCartItems] = useState([]);
    const [Total,setTotal] =useState()
    const [hasError, setError] = useState(false);
   
   useEffect(()=>{
       const getCartItems =async ()=>{
           const url =  "http://localhost:5000/api/cart/get-cart";
           await fetch(url)
           .then((response)=>response.json())
           .then((res)=>{
               console.log(res.data.items)
               console.log(res.data.subTotal)
               setTotal(res.data.subTotal)
               setCartItems(res.data.items)
           }).catch((error) => {
            setError(error);
          });
       }
       getCartItems()
   },[])





return(<CartList items={Cartitems}
total={Total}/>)
}


export default Cart;