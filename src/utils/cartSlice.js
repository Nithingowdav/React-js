import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalItems: 0,
        totalPrice: 0,
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.totalItems += 1;
            state.totalPrice += action.payload.price;
        },
        removeItem: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.totalItems -= 1;
                state.totalPrice -= state.items[index].price;
                state.items.splice(index, 1);
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalItems = 0;
            state.totalPrice = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;


export default cartSlice.reducer;
