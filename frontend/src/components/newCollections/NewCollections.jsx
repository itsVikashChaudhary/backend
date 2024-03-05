import React, { useEffect, useState } from 'react'
import './NewCollections.css'
//import new_collectin from '../assets/new_collections'
import Item from '../items/Item'


const NewCollections = () => {

  const [new_collectin,setNew_Collection] = useState([]);
  useEffect(()=>{
    fetch(`${window.location.origin}/newcollections`)
    .then((respnse)=>respnse.json())
    .then((data)=>setNew_Collection(data));
  },[])

  return (
    <div className="new_collections">
<h1>New Collections</h1><hr />
<div className="collections">
{new_collectin.map((item,i)=>{
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

export default NewCollections