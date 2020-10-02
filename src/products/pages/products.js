import React,{ useEffect,useState} from 'react'
import ProductList from '../components/productList';
import LoadingSpinner from '../../shared/LoadingSpinner/loadingspinner'
import './products.css'



const Products =(props)=>{
  const [products, setProducts] = useState([]);
  const [hasError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

 


  useEffect(()=>{
    
    const getProducts=async()=>{
      setIsLoading(true);
      const url= process.env.REACT_APP_BACKEND_URL+'/products'
      await fetch(url)
      .then((response)=>response.json())
      .then((res)=>{
        setProducts(res)
        setIsLoading(false);
      }).catch((error) => {
        setError(error);
      });
    
    }
    props.checkLoggedIn()
    getProducts()
 
    

  },[])

  
    return(
     
     <React.Fragment>
   
    {isLoading ? (<div className="center">
      <LoadingSpinner />
    </div>
     
    ):(
      <ProductList items={products}/>
    )}
    
  
    
    </React.Fragment>
  
    )
}


export default Products