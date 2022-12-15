import React, { useState ,useEffect } from 'react';
function AdvanceButton(props) {
  return (
 <button style={{backgroundColor:props.color}}>{props.color}</button>
  );
}
export default AdvanceButton;