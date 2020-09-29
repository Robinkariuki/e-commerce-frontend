import React,{useState} from 'react';
import './login.css';
import {useHistory} from 'react-router-dom';
import Authcontext, { AuthContext } from '../../context/auth-context'
import { useContext } from 'react';

const Login =()=>{

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();


  const history = useHistory();
  const auth = useContext(AuthContext);

const submitHandler = async (e) =>{
  e.preventDefault();
  try{
    const url = "http://localhost:5000/api/users/login";
    const response = await fetch(url,{
      method:"POST",
      body:JSON.stringify({
        email,
        password
      }),
      headers:{
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((response)=>response.json())
    .then(response=>{
      
      console.log(response)
      localStorage.setItem("auth-token",response.token)
    })
    // auth.login(response.userId,response.token);
    
    
    alert("login sucessfull")
    history.push('/')
  }catch(error){
 console.log(error)
  }
}  



    return(
        <div className="container">
         
<div className="card">

  <h5 className="card-header info-color white-text text-center py-4">
    <strong>Sign in</strong>
  </h5>


  <div className="card-body px-lg-5 pt-0">

    
    <form className="text-center" style={{color: 757575}} action="#!"onSubmit={submitHandler}>

     
      <div className="md-form">
        <input type="email" id="materialLoginFormEmail" className="form-control"onChange={(e)=>{setEmail(e.target.value)}}></input>
        <label htmlFor="materialLoginFormEmail">E-mail</label>
      </div>

  
      <div className="md-form">
        <input type="password" id="materialLoginFormPassword" className="form-control"onChange={(e)=>{setPassword(e.target.value)}}></input>
        <label htmlFor="materialLoginFormPassword">Password</label>
      </div>

 
    
      <button className="btn btn-outline-red btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit" disabled={!email  || !password}>Sign in</button>

     
      <p>Not a member?
        <a href="">Signup</a>
      </p>

    
    </form>
   

  </div>

</div>
        </div>
    )
}

export default Login;