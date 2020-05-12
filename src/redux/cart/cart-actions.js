import CartActionTypes from './cart-types'

export const addItem = (item) => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item
})