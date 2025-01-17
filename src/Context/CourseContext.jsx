import React, {createContext, useState} from "react";
import all_courses from "../Components/Assets/all_courses";

export const CourseContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let index = 0 ; index < all_courses.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const CourseContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    
    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        
    }
    
    const getTotalCartAmount = ()=> {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_courses.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.price * cartItems[item] ;
            }
            
        }
        return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue ={getTotalCartItems, getTotalCartAmount, all_courses, cartItems, addToCart , removeFromCart};

    return(
        <CourseContext.Provider value={contextValue}>
            {props.children}
        </CourseContext.Provider>
    )
}

export default CourseContextProvider;