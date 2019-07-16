import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Product from '../../components/Product';
import Header from '../../components/Header';
const useStyles = makeStyles(theme => {
  const { spacing } = theme;
  return createStyles({
    button: {
      margin: spacing(1),
    },
  });
});

const HomePage = () => {
  return (
    <div>
      <Header />
      <Product />
    </div>
  );
};

export default HomePage;
