import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length > 0
                ? (cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />)))
                : (<span className="empty-message">You cart is empty</span>)
            }
        </div>
        <CustomButton onClick={() => {
            dispatch(toggleCartHidden());
            history.push('/checkout');
        }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

// const mapDispatchToProps = dispatch => ({
//     toggleHidden: () => dispatch(toggleCartHidden())
// })

export default withRouter(connect(mapStateToProps)(CartDropdown));