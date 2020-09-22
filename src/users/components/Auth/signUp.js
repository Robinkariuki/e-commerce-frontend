import React from 'react';
import './signUp.css';

const SignUp =()=>{
    return(
        <div className="container">
        
<div className="card">

    <h5 className="card-header py-4">
        <p><strong>Sign up</strong></p>
    </h5>

    
    <div className="card-body px-lg-5 pt-0">

        
        <form className="text-center" style={{}} action="#!">

            <div className="form-row">
                <div className="col">
                    
                    <div className="md-form">
                        <input type="text" id="materialRegisterFormFirstName" className="form-control"></input>
                        <label for="materialRegisterFormFirstName">Username</label>
                    </div>
                </div>
            </div>

            
            <div className="md-form mt-0">
                <input type="email" id="materialRegisterFormEmail" className="form-control"></input>
                <label for="materialRegisterFormEmail">E-mail</label>
            </div>

            
            <div className="md-form">
                <input type="password" id="materialRegisterFormPassword" className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock"></input>
                <label for="materialRegisterFormPassword">Password</label>
                <small id="materialRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                     6 characters 
                </small>
            </div>

    

            <button className="btn btn-outline-danger btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>

            <hr></hr>

        
    

        </form>
    

    </div>

</div>

</div>

    )
}

export default SignUp;