import React, { createContext, useEffect, useState } from "react"
//import all_product from "../components/assets/all_product"



export const ShopContext = createContext(null);

//for cart
const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] =0;    
    }
    return cart;
}

const ShopContextProvider = (props) =>{


    const [all_product,setAll_Product] = useState([]);
     const [cartItems,setCartItem] = useState(getDefaultCart());

     useEffect(()=>{
       fetch(`${window.location.origin}/allproducts`)
       .then((Response)=>Response.json())
       .then((data)=>setAll_Product(data))

       if(localStorage.getItem('auth-token')){
        fetch(`${window.location.origin}/getcart`,{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token': `${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
            },
            body:"",
        }).then((response)=>response.json())
        .then((data)=>setCartItem(data));
       }
     },[])



    const addToCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        if(localStorage.getItem('auth-token')){
            fetch(`${window.location.origin}/addtocart`, {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'auth-token': `${localStorage.getItem('auth-token')}`, // Use template literals
                'Content-Type': 'application/json',
                
            },
            body:JSON.stringify({"itemId": itemId }), // Correctly stringify the request body
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }
    const removeFromCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('auth-token')){
            fetch(`${window.location.origin}/removefromcart`, {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'auth-token': `${localStorage.getItem('auth-token')}`, // Use template literals
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({"itemId": itemId }), // Correctly stringify the request body
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }
     //cart total AMOUNT
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id === Number(item));
                totalAmount += itemInfo.new_price *cartItems[item];
                console.log(totalAmount);
            }
            
        }
        return totalAmount;
    }

    const getTotalCartItems = ()=>{
        let totlaItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totlaItem += cartItems[item];
            }
        }
        return totlaItem;
    }
    
    const contextValue = {getTotalCartItems,getTotalCartAmount, all_product,cartItems, addToCart,removeFromCart}
    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;