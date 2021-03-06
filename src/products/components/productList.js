import React from 'react';
import ProductItem from './productItem';
import './productList.css'


const ProductList =(props)=>{
    if(props.items.length===0){
        return(
            <div className="center">
                
                <h2>No Images</h2>
               

            </div>
        )
    } 
return(<div className='container'>
    {props.items.products.map(item=>(
        <ProductItem
        className={'id'}
        key={item._id} 
        image={item.image}
        description={item.description}
        price={item.price}
        id={item._id}
     
        
        

        />
    ))}
    
</div>)
    
  
  
}


export default ProductList;