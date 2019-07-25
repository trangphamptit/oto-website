import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Product from './Product';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

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
