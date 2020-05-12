import React from 'react'

const CartItem = ({item:{img, price, name, quantity}}) => {
    return (
        <div className="flex mb-2">
            <img src={img} alt="cart item" className="w-8"/>
            <div className="ml-4">
                <p>{name}</p>
                <p> {quantity} x ${price}</p>
            </div>
        </div>
    )
}

export default CartItem
