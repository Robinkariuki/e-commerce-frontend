import React,{useEffect,useState} from 'react'
import ProductList from '../components/productList';
import MainNavigation from '../../shared/Navigation/MainNavbar';
const Unsplash = require('unsplash-js').default;

const Products =()=>{
  const [products, setProducts] = useState([]);
  const [hasError, setError] = useState(false);

  useEffect(()=>{
    const getProducts=async()=>{
      const url= 'http://localhost:5000/api/products'
      await fetch(url)
      .then((response)=>response.json())
      .then((res)=>{
        console.log(res)
        setProducts(res)
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
    return(
     
     <React.Fragment>
    <MainNavigation/>
     <ProductList items={products}/>
    </React.Fragment>
  
    )
}


export default Products