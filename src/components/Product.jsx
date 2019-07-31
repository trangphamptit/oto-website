import React, { useContext } from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import useStyles from './ProductStyle';
import { AppContext } from '../services/AppContext';
export default function Product(props) {
    const classes = useStyles();
    const { product } = props;
    const { id, image, name, price } = product;
    const { addToCart } = useContext(AppContext);
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
                        color="primary"
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
            </Link>
            <Button
                className={classes.button}
                onClick={() => {
                    addToCart(product);
                }}
            >
                Add to cart
            </Button>
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
