import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload)
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload)
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload)
      item.quantity++
      item.totalPrice = item.quantity * item.unitPrice
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload)
      // console.log('itemQuantity', item, 'action', action.payload)

      item.quantity--
      if (item.quantity === 0) cartSlice.caseReducers.removeItem(state, action)
      item.totalPrice = item.quantity * item.unitPrice
    },
    resetCart: (state) => {
      state.cart = []
    },
  },
})

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  resetCart,
  cart,
} = cartSlice.actions

export default cartSlice.reducer

export function getTotalCartPrice(state) {
  if (state.cart.cart.length === 0) {
    return 0
  }
  return state.cart.cart.reduce((total, item) => total + item.totalPrice, 0)
}

export function getTotalPizza(state) {
  return state.cart.cart.reduce((total, item) => total + item.quantity, 0)
}

export const getQuantity = (id) => (state) => {
  return state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0
}
