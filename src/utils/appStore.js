 import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // ✅ This is the correct reducer from createSlice

const appStore = configureStore({
  reducer: {
    cart: cartReducer, // ✅ Use the slice reducer here
  },
});

export default appStore;

// Best Practices for Redux Toolkit
//✅ Use createSlice() to create slices of state and reducers. It simplifies the process of writing reducers and actions.
//❌ Don't write your own reducer when you already used createSlice().

//✅ Always plug the slice reducer (cartReducer) into the store.


