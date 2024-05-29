import { configureStore } from '@reduxjs/toolkit'
import cartadd from '../cart/cartslice'

export const store = configureStore({
  reducer: {
    cart: cartadd,
  },
})