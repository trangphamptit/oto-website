import React from 'react';
import './CartTotal.scss';
import Button from '../../components/Layout/Button/Button';
export default function CartTotal() {
  return (
    <div className="cart-total">
      <div className="cart-total-content">
        <div className="box-style">
          <span>Tạm tính: </span>
          <strong>620.000 đ</strong>
        </div>
        <div className="box-style">
          <span>Thành tiền: </span>
          <div>
            <strong>620.000 đ</strong>
            <small>(Đã bao gồm VAT)</small>
          </div>
        </div>
      </div>
      <div className="button">
        <Button>Tiến hành đặt hàng</Button>
      </div>
    </div>
  );
}
