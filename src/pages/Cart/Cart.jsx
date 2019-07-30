import React from 'react';
import Grid from '@material-ui/core/Grid';
import CartTotal from './CartTotal';
import CartItem from './CartItem';
export default function Cart(props) {
  return (
    <React.Fragment>
      <h1>Giỏ hàng của bạn</h1>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={8}>
          <CartItem />
          <CartItem />
          <CartItem />
        </Grid>
        <Grid item xs={4}>
          <CartTotal />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
