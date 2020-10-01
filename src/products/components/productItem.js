import React, { useEffect } from 'react';
import './productItem.css';






const ProductItem =(props)=>{


  const addToCart =async (productId,quantity)=>{
    try{
    const url = "http://localhost:5000/api/cart/addtocart"
    const response =await fetch(url,{
      method: "POST",
      body: JSON.stringify({
        productId: productId,
        quantity: quantity,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });let data = await response.json();
    alert("Item Added To Cart");
   
  } catch (err) {
    alert("Something Went Wrong");
    console.log(err);
  }


  }

    console.log(props.id)

    return(    
  <div className="item card-group">
   <div className="card mb-4 ">
    <div className="view overlay" >
      <div className='imagesize'>
  <img className="card-img-top" src={`http://localhost:5000/${props.image}`} alt="Card image cap"></img>
  </div>
  <a href="#!">
    <div className="mask rgba-white-slight"></div>
  </a>
</div>
<div className="card-body p-3">
<a href="#!" className="orange-text d-flex flex-row-reverse p-2">
      <h5 className="waves-effect waves-light">more details<i className="fas fa-angle-double-right ml-2"></i></h5>
    </a>
    <h5 className="card-title font-weight-bold fuchsia-rose-text mb-0">Description</h5>
  <p className="aqua-sky-text mb-0">{props.description||'no descriptption'}</p>
  <ul className="list-unstyled list-inline my-2">
    <p> KSH  {props.price}</p>
  </ul>
  <i className="fas fa-cart-plus" type='submit' onClick={(e)=>addToCart(props.id,1)}> add to cart</i>

</div>
</div>
  </div>
      
    )
}


export default ProductItem;