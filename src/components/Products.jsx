import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product';

export default function Products() {
  return (
    <Grid container justify="center" spacing={3}>
      <Grid item xs={3}>
        <Product />
      </Grid>
      <Grid item xs={3}>
        <Product />
      </Grid>
      <Grid item xs={3}>
        <Product />
      </Grid>
      <Grid item xs={3}>
        <Product />
      </Grid>
      <Grid item xs={3}>
        <Product />
      </Grid>
      <Grid item xs={3}>
        <Product />
      </Grid>
      <Grid item xs={3}>
        <Product />
      </Grid>
      <Grid item xs={3}>
        <Product />
      </Grid>
    </Grid>
    /* <Grid container justify="center" spacing={spacing}> */
    /* {[0, 1, 2].map(value => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))} */

    /* </Grid> */
  );
}
