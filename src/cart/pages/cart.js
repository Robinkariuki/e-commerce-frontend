import React,{useState,useEffect,useContext} from 'react';
import CartList from '../components/cartList';
import cartContext from '../context/cartConext';


const Cart =()=>{
  const cart = useContext(cartContext)
    const [Cartitems, setCartItems] = useState([]);
    const [Total,setTotal] =useState()
    const [hasError, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  
    const increaseQty= async (id)=> {
        try {
          const url =  process.env.REACT_APP_BACKEND_URL+'/cart/increase-quantity'
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
    

const decreaseQuantity=async(id)=>{
  try{
  const url = process.env.REACT_APP_BACKEND_URL+'/cart/reduce-quantity'
  const response = await fetch(url,{
    method: "POST",
    body: JSON.stringify({
      productId:id,
    }),
    headers:{
    "Content-type": "application/json; charset=UTF-8",
  },
});
alert("Item decreased");
getCartItems()
console.log(response);

  }catch (err) {
    alert("Something Went Wrong");
    console.log(err);
  }

}

const removeItem=async(id)=>{
  try{
  const url =process.env.REACT_APP_BACKEND_URL+'/cart/remove-product';
  const response = await fetch (url,{
    method:"POST",
    body:JSON.stringify({
      productId:id
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  alert("removed item from cart ");
  getCartItems()
  console.log(response);
  }catch (err) {
    alert("Something Went Wrong");
    console.log(err);
  }
  
}

    const getCartItems =async ()=>{
        const url =  process.env.REACT_APP_BACKEND_URL+'/cart/get-cart';
        setIsLoading(true);
        await fetch(url)
        .then((response)=>response.json())
        .then((res)=>{
            setTotal(res.data.subTotal)
            setCartItems(res.data.items)
            setIsLoading(false);
            cart.items(res.data.items)
        }).catch((error) => {
         setError(error);
       });
    }
   useEffect(()=>{
       getCartItems()
   },[])





return(

<React.Fragment>
        
<CartList items={Cartitems}
 increaseQty={increaseQty}   
total={Total}
getCartItems={getCartItems}
decreaseQuantity={decreaseQuantity}
removeItem={removeItem}
isLoading={isLoading}

/>
</React.Fragment>)


}


export default Cart;