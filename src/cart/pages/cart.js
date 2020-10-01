import React,{useState,useEffect,useContext} from 'react';
import CartList from '../components/cartList';
import LoadingSpinner from '../../shared/LoadingSpinner/loadingspinner'
import UserContext from '../../users/context/user-context';


const Cart =()=>{
    const [Cartitems, setCartItems] = useState([]);
    const [Total,setTotal] =useState()
    const [hasError, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  
    const {userData} = useContext(UserContext);
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
    

const decreaseQuantity=async(id)=>{
  try{
  const url = "http://localhost:5000/api/cart/reduce-quantity"
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
  const url ="http://localhost:5000/api/cart/remove-product";
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
        const url =  "http://localhost:5000/api/cart/get-cart";
        setIsLoading(true);
        await fetch(url)
        .then((response)=>response.json())
        .then((res)=>{
            console.log(res.data.items)
            console.log(res.data.subTotal)
            setTotal(res.data.subTotal)
            setCartItems(res.data.items)
            setIsLoading(false);
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