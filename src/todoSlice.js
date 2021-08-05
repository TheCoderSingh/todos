import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
	name: "todo",
	initialState: {
		value: [],
	},
	reducers: {
		addItem: (state, action) => {
			state.value.push(action.payload);
		},
		deleteItem: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { addItem, deleteItem } = todoSlice.actions;

export default todoSlice.reducer;
