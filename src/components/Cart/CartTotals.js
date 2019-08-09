import React, { useContext } from 'react';

import { AppContext } from '../../services/AppContext';
import { withRouter } from 'react-router-dom';
const checkLogin = props => {
    let user = localStorage.getItem('user');
    if (user) {
        props.history.push('/checkout');
    } else {
        props.history.push('/login');
    }

    console.log('user', user);
};
const CartTotals = props => {
    // const { clearCart } = this.props.value;

    const { getTotal, cart } = useContext(AppContext);

    const total = getTotal(cart);
    return (
        <tr>
            <td colSpan="3"></td>
            <td>
                <h4>
                    <strong>Tổng Tiền</strong>
                </h4>
            </td>
            <td>
                <h4>
                    <strong>{total}vnd</strong>
                </h4>
            </td>
            <td colSpan="3">
                <button
                    type="button"
                    className="btn btn-primary waves-effect waves-light"
                    onClick={() => checkLogin(props)}
                >
                    Mua hàng
                    <i className="fa fa-angle-right right"></i>
                </button>
            </td>
        </tr>
    );
};

export default withRouter(CartTotals);
