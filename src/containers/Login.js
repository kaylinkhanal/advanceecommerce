import React, { useState ,useEffect } from 'react';
import AdvanceButton from '../components/advanceButton';
import SocialLogin from '../components/socialLogin'
import OtpLogin from '../components/otpLogin'
const Login=({chocolate, color})=> {
   const [name,setName ]=useState('')
  return (
  <div>
    <input onKeyUp ={(e)=> setName(e.target.value)}/>
    <SocialLogin name={name}/>

    <div style={{backgroundColor:'grey'}}>
    <OtpLogin />
    </div>
  </div>

  );
}
export default Login;

