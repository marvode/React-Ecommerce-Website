import CartActionTypes from "./cart-types";

export const addItem = (item) => ({
	type: CartActionTypes.ADD_CART_ITEM,
	payload: item,
});

export const removeItem = (item) => ({
	type: CartActionTypes.REMOVE_CART_ITEM,
	payload: item,
});

export const clearItem = (item) => ({
	type: CartActionTypes.CLEAR_CART_ITEM,
	payload: item,
});
