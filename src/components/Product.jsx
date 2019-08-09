import React, { useContext } from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import useStyles from './ProductStyle';
import { AppContext } from '../services/AppContext';
import Modal from '../components/Modals/Modal';

export default function Product(props) {
    const classes = useStyles();
    const { product } = props;

    const { _id, image, name, price } = product;
    const { addToCart, openModal } = useContext(AppContext);
    console.log('product', product);
    return (
        // <Card className={classes.card}>
        //     <Link to={`/details/${_id}`}>
        //         <CardMedia
        //             className={classes.media}
        //             image={image}
        //             title="búa thoát hiểm đa năng"
        //         />
        //         <CardContent>
        //             <Typography
        //                 variant="body2"
        //                 component="p"
        //                 align="center"
        //                 transform="capitalize"
        //                 color="primary"
        //             >
        //                 {name}
        //             </Typography>
        //             <Typography
        //                 variant="body2"
        //                 color="textSecondary"
        //                 component="p"
        //                 align="center"
        //             >
        //                 {price} đ
        //             </Typography>
        //             <Typography
        //                 variant="body2"
        //                 color="textSecondary"
        //                 component="p"
        //                 align="center"
        //                 style={{ textDecoration: 'line-through' }}
        //             >
        //                 {price} đ
        //             </Typography>
        //         </CardContent>
        //     </Link>
        //     <Button
        //         className={classes.button}
        //         onClick={() => {
        //             addToCart(product);
        //             openModal();
        //         }}
        //     >
        //         Thêm vào giỏ
        //     </Button>
        // </Card>
        <div className="col-lg-4 col-md-6 mb-r">
            {/* <Link to={`/details/${_id}`}> */}
            <div class="card text-center card-cascade narrower">
                <div class="view overlay hm-white-slight z-depth-1">
                    <img src={image} class="img-fluid" alt="product" />
                    <a>
                        <div class="mask waves-light waves-effect waves-light"></div>
                    </a>
                </div>
                <div class="card-body">
                    <h4 class="card-title">
                        <strong>
                            <a>{name}</a>
                        </strong>
                    </h4>
                    <ul class="rating">
                        <li>
                            <i class="fa fa-star"></i>
                        </li>
                        <li>
                            <i class="fa fa-star"></i>
                        </li>
                        <li>
                            <i class="fa fa-star"></i>
                        </li>
                        <li>
                            <i class="fa fa-star"></i>
                        </li>
                        <li>
                            <i class="fa fa-star"></i>
                        </li>
                    </ul>
                    <p class="card-text">Sản phẩm do apply sản xuất</p>

                    <div class="card-footer">
                        <span class="left">{price}vnd</span>
                        <span class="right">
                            <a
                                class="btn-floating blue-gradient"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Add to Cart"
                                onClick={event => {
                                    addToCart(product);
                                }}
                            >
                                <i class="fa fa-shopping-cart"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </div>
    );
}
Product.defaultProps = {
    image:
        'https://salt.tikicdn.com/cache/200x200/ts/product/96/28/56/2687a225560aadd25efd2150da4f7fd2.jpg',
    productname: 'búa thoát hiểm đa năng',
    discountprice: '98.000',
    price: '1800.000',
};
