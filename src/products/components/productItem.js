import React from 'react';
import './productItem.css';


{/* <div className="card mb-4">
<div className="view overlay">
  <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Square/img(6).jpg" alt="Card image cap">
  <a href="#!">
    <div className="mask rgba-white-slight"></div>
  </a>
</div>
<div className="card-body p-3">
  <h5 className="card-title font-weight-bold fuchsia-rose-text mb-0">Indie Funk</h5>
  <p className="aqua-sky-text mb-0">Generation Funk</p>
  <ul className="list-unstyled list-inline my-2">
    <li className="list-inline-item mx-0"><i className="fas fa-star mimosa-text"></i></li>
    <li className="list-inline-item mx-0"><i className="fas fa-star mimosa-text"></i></li>
    <li className="list-inline-item mx-0"><i className="fas fa-star mimosa-text"></i></li>
    <li className="list-inline-item mx-0"><i className="fas fa-star mimosa-text"></i></li>
    <li className="list-inline-item mx-0"><i className="fas fa-star mimosa-text"></i></li>
  </ul>
  <p className="chili-pepper-text mb-0">19,99 $</p>
</div>
</div> */}


const ProductItem =(props)=>{
    console.log(props)

    return(    
  <div className="item">
   <div class="card mb-4">
    <div className="view overlay">
  <img className="card-img-top" src={props.image.thumb} alt="Card image cap"></img>
  <a href="#!">
    <div className="mask rgba-white-slight"></div>
  </a>
</div>
<div className="card-body p-3">
  <h5 className="card-title font-weight-bold fuchsia-rose-text mb-0">Indie Funk</h5>
  <p className="aqua-sky-text mb-0">Generation Funk</p>
  <ul className="list-unstyled list-inline my-2">
    <li className="list-inline-item mx-0"><i className="fas fa-star mimosa-text"></i></li>
    <li className="list-inline-item mx-0"><i className="fas fa-star mimosa-text"></i></li>
    <li className="list-inline-item mx-0"><i className="fas fa-star mimosa-text"></i></li>
    <li className="list-inline-item mx-0"><i className="fas fa-star mimosa-text"></i></li>
    <li className="list-inline-item mx-0"><i className="fas fa-star mimosa-text"></i></li>
  </ul>
  <p className="chili-pepper-text mb-0">19,99 $</p>
</div>
</div>
  </div>
      
    )
}


export default ProductItem;