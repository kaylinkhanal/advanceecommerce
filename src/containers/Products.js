
import React, { useState ,useEffect } from 'react';
import Card from '../components/card';

function Products({chocolate}) {
    const allItems = [
           {name:"nike air force", price: 123, cartCount:0, favCount: 0, image: "https://cdn.pixabay.com/photo/2022/12/02/18/37/middle-spotted-woodpecker-7631440_640.jpg"},
          {name:"jordan 1 low", price: 123, cartCount:0, favCount: 0, image: "https://cdn.pixabay.com/photo/2022/12/04/23/12/siblings-7635490__340.jpg"},
          {name:"cooker", price: 43, cartCount:0, favCount: 0, image: "https://cdn.pixabay.com/photo/2022/12/02/18/37/middle-spotted-woodpecker-7631440_640.jpg"},
          {name:"vacuum cleaner", price: 12, cartCount:0, favCount: 0, image: "https://cdn.pixabay.com/photo/2022/12/04/23/12/siblings-7635490__340.jpg"},
      ]
  const [favLists, setFavLists] = useState([]);
  const [productList, setProductList] = useState(allItems);

  const newCount =(value)=> {
    const newVal =favLists.filter((item,id)=>{
      return item.name=== value.name
    })

    if(newVal.length> 0){
      const tempFavList  = [...favLists]
      const newVal =tempFavList.filter((item,id)=>{
        return item.name!== value.name
      })
      setFavLists(newVal)
    }else{
      const tempFavList  = [...favLists]
      tempFavList.push(value)
      setFavLists(tempFavList)
    }

  
    // setTotalLikes(totalLikes+value)
  }

  const addCart=(id)=>{
    const tempProductList = [...productList]
    tempProductList[id]['cartCount']++
    setProductList(tempProductList)
  }

  const removeCart=(id)=>{
    const tempProductList = [...productList]
    tempProductList[id]['cartCount']--
    setProductList(tempProductList)
  }

  const calculateGrandTotal = () => {
    let sum = 0
    productList.map((item)=>{
      sum =  sum + (item.price *  item.cartCount)
    })
    return sum
  }
  
  return (
    <>
    <div style={{display:'flex'}}>
    {productList.map((item,id)=>{
         return(<Card item={item} 
          id={id}
          addCart={addCart}
          newCount={newCount}/>)
        }
         )}
          
    </div>
    <div className="Fav">
      Favorites list: {favLists.length}
      <br/>
      {favLists.map((item,id)=> <li>{item.name}</li>)}
    </div>
    <table border={1}>
      <tr>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
      {productList.map((item,id)=>{
        if(item.cartCount === 0){
          return null
        }
      return(
        <tr>
           <th>{item.name}</th>
           <th>
             <button
               onClick={()=> removeCart(id)}
             >-</button>
             {item.cartCount}
             <button 
             onClick={()=> addCart(id)}>
               +</button>
             </th>
           <th>{item.price* item.cartCount}</th>

        </tr>        
      )
      })}
   Grand Total: {calculateGrandTotal()}
    </table>
 
  </>
  );
}
export default Products;

