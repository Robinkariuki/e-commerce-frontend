import React,{useContext, useEffect,useState} from 'react'
import ProductList from '../components/productList';
import MainNavigation from '../../shared/Navigation/MainNavbar';
import LoadingSpinner from '../../shared/LoadingSpinner/loadingspinner'
import './products.css'
import UserContext from '../../users/context/user-context';
// const Unsplash = require('unsplash-js').default;

const Products =()=>{
  const [products, setProducts] = useState([]);
  const [hasError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {userData} = useContext(UserContext);


  useEffect(()=>{
    
    const getProducts=async()=>{
      setIsLoading(true);
      const url= 'http://localhost:5000/api/products'
      await fetch(url)
      .then((response)=>response.json())
      .then((res)=>{
        console.log(res)
        setProducts(res)
        setIsLoading(false);
      }).catch((error) => {
        setError(error);
      });
    
    }
    getProducts()
 

  },[])




    // const [loadedUsers,setLoadedUsers] = useState([])
    // const unsplash = new Unsplash({ accessKey: "CGU__vWPrr2KnXkILVwZzWT6PwsFxpcsL8iDqiyRoz8" });

    // useEffect(()=>{
    // unsplash.users.profile("robin")
    // .catch(err => {
    // console.log(err)
    // });
    // unsplash.photos.listPhotos(1, 16, "latest",{ orientation: "potrait" })
    // .then(res=>res.json())
    // .then(results=>{
    //   setLoadedUsers(results)
    //   console.log(loadedUsers)
    //   console.log(results)
    // })
    // .catch((error) => {
    //     console.log(error)
    //   })

    // },[])
    console.log(userData);
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