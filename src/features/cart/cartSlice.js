import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	price: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		increase: (state, action) => {
			state.price += action.payload;
			return state;
		},
		detract: (state, action) => {
			state.price -= action.payload;
			return state;
		},

		change: (state, action) => {
			state.price = action.payload;
			return state;
		},

		van: (state, action) => {
			state.van = action.payload;
			return state;
		},
	},
});

export const { increase, detract, change, van } = cartSlice.actions;

export default cartSlice.reducer;
