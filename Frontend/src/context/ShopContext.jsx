import React, { createContext } from 'react';
import { products } from '../assets/assets';


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currecy = '$';
    const delivery_fee = 10;

    
    const value = {
          products,
          currecy,
          delivery_fee
    }

    return(
       < ShopContext.Provider value={value}>
             {props.children}
       </ShopContext.Provider>
    )
}
export default ShopContextProvider;