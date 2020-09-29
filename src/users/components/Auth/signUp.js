import React, { useContext,useState } from 'react';
import './signUp.css';
import {useHistory} from 'react-router-dom';
import userContext from '../../context/user-context';
import ErrorNotice from '../../errorNotice';

const SignUp =()=>{

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState()
    const [error,setError] = useState();

    const history = useHistory();
    
    const {setUserData} = useContext(userContext)
     
const submitHandler =async (e) =>{
    e.preventDefault();

try{
   const url = "http://localhost:5000/api/users/signup";
   const response = await fetch(url,{
       method: "POST",
       body:JSON.stringify({
           username,
           password,
           email
       }),
       headers:{
        "Content-type": "application/json; charset=UTF-8",
      },
   })
    .then((response)=>response.json())
    .then(response=>{
        setUserData({
            token:response.token,
            user:response.user,
        });
console.log(response.errors)
setError(response.errors)
   localStorage.setItem("auth-token",response.token);
   history.push('/login') 
    })
}catch(err){
   console.log(err)
}
   }


    
return(
        <div className="container">
        
<div className="card">

    <h5 className="card-header py-4">
        <p><strong>Sign up</strong></p>
    </h5>
  
    <div className="card-body px-lg-5 pt-0">

    {error && (
        <ErrorNotice message={error.msg} clearError={() => setError(undefined)} />
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
                     6 characters 
                </small>
            </div>

    

            <button className="btn btn-outline-danger btn-rounded btn-block my-4 waves-effect z-depth-0"disabled={!email || !username || !password} type="submit" >Submit</button>

            <hr></hr>

        
    

        </form>
    

    </div>

</div>

</div>

    )
}

export default SignUp;