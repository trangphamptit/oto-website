import React from 'react';
import './CartItem.scss';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
export default function CartItem(props) {
    const { product } = props;
    const { image, name, price } = product;
    console.log(product);
    return (
        <div className="cart-item">
            <div className="cart-item-container">
                <Grid item className="img-item" xs={2}>
                    <img src={image} alt="product" />
                </Grid>
                <Grid item className="center-item" xs={10}>
                    <div className="infor-item">
                        <p>{name}</p>
                        <p>Cung cấp bởi...</p>
                        <p>Chỉ còn 2 sản phẩm</p>
                        <p>
                            <i className="fas fa-trash-alt"></i>
                        </p>
                    </div>
                    <div className="right-item">
                        <div className="price-item">
                            <p className="price">{price} d</p>
                            <p className="prev-price">155.000</p>
                        </div>
                        <div className="quantity-item">
                            <ButtonGroup
                                size="small"
                                aria-label="small outlined button group"
                            >
                                <Button>-</Button>
                                <Button>1</Button>
                                <Button>+</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </Grid>
            </div>
        </div>
    );
}
