import React from 'react';
import './CartItem.scss';
import product from '../../img/product.jpg';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
export default function CartItem(props) {
  return (
    <div className="cart-item">
      <div className="cart-item-container">
        <Grid className="img-item" xs={2}>
          <img src={product} alt="product" />
        </Grid>
        <Grid className="center-item" xs={10}>
          <div className="infor-item">
            <p>Đồng Hồ Đo Áp Suất Lốp Ô Tô Điện Tử Cầm Tay Chuyên Dụng</p>
            <p>Cung cấp bởi...</p>
            <p>Chỉ còn 2 sản phẩm</p>
            <p>
              <i class="fas fa-trash-alt"></i>
            </p>
          </div>
          <div className="right-item">
            <div className="price-item">
              <p className="price">155.000</p>
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
