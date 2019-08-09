import React, { useContext } from 'react';
import CartItem from './CartItem';
import { AppContext } from '../../services/AppContext';
export default function CartList() {
    const { cart } = useContext(AppContext);
    return (
        <React.Fragment>
            {cart.map((item, index) => {
                return <CartItem key={index} item={item} />;
            })}
        </React.Fragment>
    );
}
