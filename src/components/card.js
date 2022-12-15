import React, { useState ,useEffect } from 'react';
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Card(props) {
  const [isFav, setIsFav] = useState(false)
  return (
      <div style={{width:'100px',backgroundColor:'rgb(216, 216, 216)', margin:'10px'}}>
        {props.item.name}
        {props.item.price}
        <img src={props.item.image} width={90} height={90}/>
        <FontAwesomeIcon icon={faHeart} style={{ color: isFav? 'red': 'black' }}
        onClick={()=>{
          setIsFav(!isFav)
          if(isFav){
            props.newCount(props.item)
          }else{
            props.newCount(props.item)
          }
        }}
        />  
       <FontAwesomeIcon icon={faCartShopping} 
        onClick={()=>{
          props.addCart(props.id)
        }}
       />  
      </div>
  );
}
export default Card;