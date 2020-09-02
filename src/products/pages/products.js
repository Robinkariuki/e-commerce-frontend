import React,{useEffect,useState} from 'react'
import ProductList from '../components/productList';
import MainNavigation from '../../shared/Navigation/MainNavbar';
const Unsplash = require('unsplash-js').default;

const Products =()=>{

    const [loadedUsers,setLoadedUsers] = useState([])
    const unsplash = new Unsplash({ accessKey: "CGU__vWPrr2KnXkILVwZzWT6PwsFxpcsL8iDqiyRoz8" });

    useEffect(()=>{
    unsplash.users.profile("robin")
    .catch(err => {
    console.log(err)
    });
    unsplash.photos.listPhotos(1, 15, "latest")
    .then(res=>res.json())
    .then(results=>{
      setLoadedUsers(results)
      console.log(loadedUsers)
      console.log(results)
    })
    .catch((error) => {
        console.log(error)
      })

    },[])
    return(
     
     <React.Fragment>
    <MainNavigation/>
    <ProductList items={loadedUsers}/>
    </React.Fragment>
  
    )
}


export default Products