import CartActionTypes, { ToggleCart } from "./cart-types";
import { addItemToCart, removeItemFromCart } from "./cart-utils";

const INITIAL_STATE = {
	cartItems: [],
	cartHidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.ADD_CART_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		case CartActionTypes.REMOVE_CART_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload),
			};
		case CartActionTypes.CLEAR_CART_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(cartItem) => cartItem.id !== action.payload.id
				),
			};
		case ToggleCart:
			return {
				...state,
				cartHidden: !state.cartHidden,
			};
		default:
			return state;
	}
};

export default cartReducer;
