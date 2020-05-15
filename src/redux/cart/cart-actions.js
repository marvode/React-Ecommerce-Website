import CartActionTypes, { ToggleCart } from './cart-types'

export const addItem = (item) => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item
})

export const toggleCart = (cartDropdown ) => ({
    type: ToggleCart
})

