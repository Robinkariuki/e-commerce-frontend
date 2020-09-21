import React,{useState,useEffect} from 'react';
import CartList from '../components/cartList';




const Cart =()=>{
    const [Cartitems, setCartItems] = useState([]);
    const [Total,setTotal] =useState()
    const [hasError, setError] = useState(false);
  

    const increaseQty= async (id)=> {
        try {
          const url =  "http://localhost:5000/api/cart/increase-quantity"
          const response = await fetch(url,{
            method: "POST",
            body: JSON.stringify({
              productId:id,
             
              
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });
        
          alert("Item Increamented");
          getCartItems()
          console.log(response);
        } catch (err) {
          alert("Something Went Wrong");
          console.log(err);
        }
      }
    

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
   useEffect(()=>{
       getCartItems()
   },[])





return(<CartList items={Cartitems}
 increaseQty={increaseQty}   
total={Total}/>)
}


export default Cart;