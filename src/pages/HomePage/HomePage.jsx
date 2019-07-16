import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Product from '../../components/Product';

const useStyles = makeStyles(theme => {
  const { spacing } = theme;
  return createStyles({
    button: {
      margin: spacing(1),
    },
  });
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        HomePage
      </Button>
      <Product />
    </div>
  );
};

export default HomePage;
