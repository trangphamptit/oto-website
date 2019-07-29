import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { AppContext } from '../services/AppContext';
import { Link } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Product(props) {
  const classes = useStyles();
  const { product } = props;
  const { id, image, name, price } = product;
  console.log('product', product);
  return (
    <Card className={classes.card}>
      <Link to={`/details/${id}`}>
        <CardMedia
          className={classes.media}
          image={image}
          title="búa thoát hiểm đa năng"
        />
        <CardContent>
          <Typography
            variant="body2"
            component="p"
            align="center"
            transform="capitalize"
            color="black"
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align="center"
          >
            {price} đ
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align="center"
            style={{ textDecoration: 'line-through' }}
          >
            {price} đ
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardContent}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            style={{
              margin: 'auto',
            }}
          >
            Add to cart
          </Button>
        </CardActions>
      </Link>
    </Card>
  );
}
Product.defaultProps = {
  image:
    'https://salt.tikicdn.com/cache/200x200/ts/product/96/28/56/2687a225560aadd25efd2150da4f7fd2.jpg',
  productname: 'búa thoát hiểm đa năng',
  discountprice: '98.000',
  price: '1800.000',
};
