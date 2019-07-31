import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import CartTotal from './CartTotal';
import CartItem from './CartItem';
import { AppContext } from '../../services/AppContext';
export default function Cart(props) {
    const { cart } = useContext(AppContext);
    return (
        <React.Fragment>
            <h1>Giỏ hàng của bạn</h1>
            <Grid container justify="center" spacing={3}>
                <Grid item xs={8}>
                    {cart.map((product, index) => (
                        <CartItem key={index} product={product}></CartItem>
                    ))}
                </Grid>
                <Grid item xs={4}>
                    <CartTotal />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
