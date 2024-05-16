import { configureStore } from '@reduxjs/toolkit'
import { paymentApi } from './APIs/paymentapi';
import { cartSlice } from './features/cartReducer';


export const store = configureStore({
  reducer: {
    [paymentApi.reducerPath]: paymentApi.reducer,
    [cartSlice.name]: cartSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(paymentApi.middleware),
})