/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */



import {createContext, useReducer} from 'react'

type Cart= {
    id: number,
    name: string,
    image: string,
    new_price: number,
    quantity: number,
    size: string
    
}
type authCart={
    cart: Cart[],
    dispatch: any
}
export const CartContext = createContext<authCart | null>(null)

export const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_CART":
      return {
       
        cart: [...state.cart,action.payload]
      }
    case "UPDATE_CART":
      return {
       
        cart: [...action.payload]
      }
    case "REMOVE_CART":
      console.log(action.payload);
    
        return {
          cart: state.cart.filter((item:any)=>{
            if(item.id == action.payload[0] && item.size == action.payload[1]){
              return item.quantity -= 1
            }
            else{
              return item
            }
          })
        }
      
      
    default:
      return state
  }
}

export const CartContextProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(cartReducer, {cart: []})
  console.log(state);
  
  return (
    <CartContext.Provider value={{...state, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}


