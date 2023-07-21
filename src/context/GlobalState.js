import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    products: [
        {id: 1, name: "Product-1", price: 100},
        {id: 2, name: "Product-2", price: 200},
        {id: 3, name: "Product-3", price: 300},
    ],
    cart: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    function addProduct(product){
        dispatch({
            action: "ADD_TO_CART",
            payload: product
        })
    }

    return (
        <GlobalContext.Provider value={{
            products: state.products,
            cart: state.cart,
            addProduct,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}