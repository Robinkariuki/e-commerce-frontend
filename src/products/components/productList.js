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
        
           { props.items.map(item=>(
              <ProductItem 
              className={'id'} 
              key={item.id}
              id={item.id}
              image={item.urls}
              alt={item.alt_description}
              likes={item.likes}
              description={item.description}
              
              
              
              />
           ))}
        </div>
    )
}


export default ProductList;