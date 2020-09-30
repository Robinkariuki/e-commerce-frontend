import React, { useContext,useState } from 'react';
import './signUp.css';
import {useHistory} from 'react-router-dom';
import userContext from '../../context/user-context';
import ErrorNotice from '../../errorNotice';
import Axios from "axios";
const SignUp =()=>{

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState()
    const [error,setError] = useState();
 

    const {setUserData} = useContext(userContext)
    const history = useHistory();
    
  
     
const submitHandler = async (e) =>{
    e.preventDefault();

try{
    
    const newUser = { email, password,username };
    const response = await Axios.post("http://localhost:5000/api/users/signup", newUser);

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
return(
        <div className="container">
        
<div className="card">

    <h5 className="card-header py-4">
        <p><strong>Sign up</strong></p>
    </h5>
  
    <div className="card-body px-lg-5 pt-0">

    {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
        
        <form className="text-center" style={{}} action="#!" onSubmit={submitHandler}>

            <div className="form-row">
                <div className="col">             
                    <div className="md-form">
                        <input type="text" id="materialRegisterFormFirstName" className="form-control" onChange={(e)=>{setUsername(e.target.value)}}></input>
                        <label htmlFor="materialRegisterFormFirstName">Username</label>
                    </div>
                </div>
            </div>

            
            <div className="md-form mt-0">
                <input type="email" id="materialRegisterFormEmail" className="form-control" onChange={(e)=>{setEmail(e.target.value)}}></input>
                <label htmlFor="materialRegisterFormEmail">E-mail</label>
            </div>

            
            <div className="md-form">
                <input type="password" id="materialRegisterFormPassword" className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock"onChange={(e)=>{setPassword(e.target.value)}}></input>
                <label htmlFor="materialRegisterFormPassword">Password</label>
                <small id="materialRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                    
                </small>
            </div>

    

            <button className="btn btn-outline-danger btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit" >Submit</button>

            <hr></hr>

        
    

        </form>
    

    </div>

</div>

</div>

    )
}

export default SignUp;