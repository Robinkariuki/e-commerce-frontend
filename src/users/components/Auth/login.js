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
    });
    auth.login(response.userId,response.token);
    
    localStorage.setItem("auth-token",response.token )
    alert("login sucessfull")
    history.push('/')
  }catch(error){
 console.log(error)
  }
}  



    return(
        <div className="container">
         
<div class="card">

  <h5 class="card-header info-color white-text text-center py-4">
    <strong>Sign in</strong>
  </h5>


  <div class="card-body px-lg-5 pt-0">

    
    <form class="text-center" style={{color: 757575}} action="#!"onSubmit={submitHandler}>

     
      <div class="md-form">
        <input type="email" id="materialLoginFormEmail" class="form-control"onChange={(e)=>{setEmail(e.target.value)}}></input>
        <label htmlfor="materialLoginFormEmail">E-mail</label>
      </div>

  
      <div class="md-form">
        <input type="password" id="materialLoginFormPassword" class="form-control"onChange={(e)=>{setPassword(e.target.value)}}></input>
        <label for="materialLoginFormPassword">Password</label>
      </div>

 
    
      <button class="btn btn-outline-red btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>

     
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