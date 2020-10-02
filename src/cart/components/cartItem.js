import React, { useEffect } from 'react';

const CartItem =(props)=>{

  
 const {getCartItems}= props


useEffect(()=>{
  getCartItems()
},[])



    return(
     
      <div className="row">
    
      
        <div className="col-lg-8">
    
      
          <div className="mb-3">
            <div className="pt-4 wish-list">
    
              
    
              <div className="row mb-4">
                <div className="col-md-5 col-lg-3 col-xl-3">
                  <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                    <img className="img-fluid w-100"
                      src={props.image}alt="Sample"></img>
                    <a href="#!">
                    </a>
                  </div>
                </div>
                <div className="col-md-7 col-lg-9 col-xl-9">
                  <div>
                    <div className="d-flex justify-content-between">
                      <div>
    <h5></h5>
                        {/* <p className="mb-3 text-muted text-uppercase small">Shirt - blue</p>
                        <p className="mb-2 text-muted text-uppercase small">Color: blue</p>
                        <p className="mb-3 text-muted text-uppercase small">Size: M</p> */}
                      </div>
                     
                    </div>
                    <div>
                        <div className="def-number-input number-input safari_only mb-0 w-100">
                          <button className="btn btn-primary px-3"onClick={(e)=>props.decreaseQuantity(props.id)}> <i className="fas fa-minus"></i></button>
                          <input className="quantity" min="0" name="quantity" readOnly value={props.quantity} type="number"></input>
                          <button className="
btn btn-primary px-3" onClick={(e)=>props.increaseQty(props.id)}> <i className="fas fa-plus"aria-hidden="true"></i></button>
                        </div>
                     
                      </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <a href="#!" type="button" className="card-link-secondary small text-uppercase mr-3"><i
                            className="fas fa-trash-alt mr-1"onClick={(e)=>props.removeItem(props.id)} >Remove item </i> </a>
                      </div>
    <p className="mb-0"><span><strong id="summary">ksh{props.price}</strong></span></p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mb-4"></hr>          
            </div>
          </div>
         
    
         
          {/* <div className="mb-3">
            <div className="pt-4">
    
              <h5 className="mb-4">We accept</h5>
    
              <img className="mr-2" width="45px"
                src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                alt="Visa"></img>
              <img className="mr-2" width="45px"
                src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                alt="American Express"></img>
              <img className="mr-2" width="45px"
                src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                alt="Mastercard"></img>
              <img className="mr-2" width="45px"
                src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                alt="PayPal acceptance mark"></img>
            </div>
          </div> */}
          
        </div>
      
       
    
    
      </div>
 
    
    
    )
}

export default CartItem;