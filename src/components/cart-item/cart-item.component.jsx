import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({item: { imageUrl, price, name, quantity }}) => (
    <div className="cart-item">
        <img src={imageUrl} alt={name} />
        <div className="item-details">
            <span className="name">{name} - ({quantity})</span>
            <span className="price">
                ${price * quantity}
            </span>
        </div>
    </div>
)

export default CartItem;