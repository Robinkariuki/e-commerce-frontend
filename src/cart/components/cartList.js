import React from 'react';
import CartItem from './cartItem';


const CartList =(props)=>{
    if(props.items.length===0){
        return(
            <div className="center">
                
                <h2>No Items</h2>
               

            </div>
        )
    } 
    console.log(props.items)
    return(<div>
        <section className="container">
    <h5 className="mb-4">Cart (<span>{props.items.length}</span> items)</h5>
        {props.items.map(item=>(
            <CartItem
            key={item._id} 
            image={item.image}
            quantity={item.quantity}
            price={item.price}
            id={item._id}
            />
        ))}
           <div className="col-lg-4">
    
       
          <div className="mb-3">
            <div className="pt-4">
    
              <h5 className="mb-3">The total amount of</h5>
    
              <ul className="list-group list-group-flush">
  
              
                <li className="list-group-item d-flex justify-content-between align-items-center px-0 ">
                <span><strong>Total</strong></span>
                  <span><strong>Ksh.{props.total}</strong></span>
                </li>
              </ul>
    
              <button type="button" className="btn btn-primary btn-block">go to checkout</button>
    
            </div>
          </div>
       
          <div className="mb-3">
            <div className="pt-4">
    
              <a className="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample"
                aria-expanded="false" aria-controls="collapseExample">
                Add a discount code (optional)
                <span><i className="fas fa-chevron-down pt-1"></i></span>
              </a>
    
              <div className="collapse" id="collapseExample">
                <div className="mt-3">
                  <div className="md-form md-outline mb-0">
                    <input type="text" id="discount-code" className="form-control font-weight-light"
                      placeholder="Enter discount code"></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
        </div>
  </section>
    </div>)
};

    
export default CartList;