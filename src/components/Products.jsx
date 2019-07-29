import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { AppContext } from '../services/AppContext';
import Product from './Product';

export default function Products(props) {
  const { products } = useContext(AppContext);

  console.log('products', products);
  return (
    <Grid container justify="center" spacing={3}>
      {products.map((product, index) => (
        <Grid item xs={3}>
          <Product key={index} product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
