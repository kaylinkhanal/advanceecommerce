import React, { useState ,useEffect } from 'react';
import AdvanceButton from '../components/advanceButton';

const Login=({chocolate, color})=> {
    const arr= ['black', 'blue','green','pink']
  return (
      <>
      {arr.map((item)=> <AdvanceButton color={item}/> )}
      </>
  );
}
export default Login;

