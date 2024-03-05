import React, { useEffect, useState } from 'react'
import './Popular.css'
// import data_product from '../assets/data'
import Item from '../items/Item'

const Popular = () => {

  const [popularProducts,setPopularProduts] = useState([]);
  useEffect(()=>{
     fetch(`${window.location.origin}/popularinwomen`)
     .then((Response)=>Response.json())
     .then((data)=>setPopularProduts(data));
  },[])


  return (
    <div className="popular">
<h1>POPULAR IN WOMEN</h1><hr />
<div className="popular-item">
    {popularProducts.map((item,i)=>{
        return <Item key={i}
         id={item.id}
         name={item.name}
        image={item.image} 
        new_price={item.new_price}
         old_price={item.old_price}
         />
    })}
</div>
    </div>
  )
}

export default Popular