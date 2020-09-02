import React from 'react';





const ProductItem =(props)=>{
    console.log(props)
    








    return(


        
        <div className="row">
  <div className="col-md-12">

    <div id="mdb-lightbox-ui"></div>

    <div className="mdb-lightbox no-margin">

      <figure className="col-md-4">
        <a href={props.image.full} data-size="1600x1067">
          <img alt="picture" src={props.image.thumb}
            className="img-fluid"></img>
        </a>
      </figure>
      </div>
      </div>
      </div>
      
    )
}


export default ProductItem;