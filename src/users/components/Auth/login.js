import React from 'react'


const Login =()=>{
    return(
        <div className="container">
         
<div class="card">

  <h5 class="card-header info-color white-text text-center py-4">
    <strong>Sign in</strong>
  </h5>


  <div class="card-body px-lg-5 pt-0">

    
    <form class="text-center" style="color: #757575;" action="#!">

     
      <div class="md-form">
        <input type="email" id="materialLoginFormEmail" class="form-control"></input>
        <label for="materialLoginFormEmail">E-mail</label>
      </div>

  
      <div class="md-form">
        <input type="password" id="materialLoginFormPassword" class="form-control"></input>
        <label for="materialLoginFormPassword">Password</label>
      </div>

      <div class="d-flex justify-content-around">
        <div>
         
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="materialLoginFormRemember"></input>
            <label class="form-check-label" for="materialLoginFormRemember">Remember me</label>
          </div>
        </div>
        <div>
      
          <a href="">Forgot password?</a>
        </div>
      </div>

    
      <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>

     
      <p>Not a member?
        <a href="">Register</a>
      </p>

    
    </form>
   

  </div>

</div>
        </div>
    )
}

export default Login;