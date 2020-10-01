import React,{useState,useContext} from 'react';
import './login.css';
import {useHistory} from 'react-router-dom';
import userContext from '../../context/user-context';
import ErrorNotice from '../../errorNotice';
import Axios from "axios";

const Login =()=>{

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();


  const history = useHistory();
  const {setUserData} = useContext(userContext)

const submitHandler = async (e) =>{
  e.preventDefault();
  try{
    
    const loginUser = { email, password};
    const response = await Axios.post("http://localhost:5000/api/users/login", loginUser);

    setUserData({
      token: response.data.token,
      user: response.data.user,
    });
    localStorage.setItem("auth-token", response.data.token);
    history.push("/");
  } catch (err) {
    err.response.data.msg && setError(err.response.data.msg);
  }
};
console.log(error)


    return(
        <div className="container">
         
<div className="card">

  <h5 className="card-header info-color white-text text-center py-4">
    <strong>Sign in</strong>
  </h5>
  {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
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

 
    
      <button className="btn btn-outline-red btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>

     
      <p>Not a member?
        
        <a href="" >Signup</a>
      </p>

    
    </form>
   

  </div>

</div>
        </div>
    )
}

export default Login;