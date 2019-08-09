import React, { useContext } from 'react';

import EmptyCart from './EmptyCart';
import { AppContext } from '../../services/AppContext';
import CartList from './CartList';
import CartTotals from './CartTotals';
import './Cart.scss';
export default function Cart() {
    const { cart } = useContext(AppContext);
    console.log('cart', cart);
    if (cart.length > 0) {
        return (
            <React.Fragment>
                <h1 style={{ textAlign: 'center' }}>your cart</h1>
                <section className="section">
                    <div className="table-responsive">
                        <table className="table product-table">
                            <thead>
                                <tr>
                                    <th>Sản Phẩm</th>
                                    <th>Tên</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng Cộng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <CartList value={cart} />
                            </tbody>
                            <CartTotals />
                        </table>
                    </div>
                </section>
            </React.Fragment>
        );
    } else {
        return <EmptyCart />;
    }
}
