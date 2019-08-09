import React, { useContext } from 'react';
import { AppContext } from '../../services/AppContext';

export default function CartItem({ item }) {
    // console.log('item', item);
    let itemTotal = item.cartQuantity * item.price;
    const { increment, decrement, removeItem } = useContext(AppContext);
    return (
        <tr>
            <td scope="row">
                <img
                    src={item.image}
                    alt="image"
                    className="img-fluid z-depth-0"
                />
            </td>
            <td>
                <h5>
                    <strong>{item.name}</strong>
                </h5>
            </td>
            <td>{item.price} vnd</td>
            <td className="center-on-small-only">
                <span className="qty">{item.cartQuantity}</span>
                <div className="btn-group radio-group" data-toggle="buttons">
                    <label
                        className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light"
                    >
                        <span
                            onClick={() => decrement(item)}
                            disabled={item.cartQuantity === 1}
                        >
                            —
                        </span>
                    </label>
                    <label
                        className="btn btn-sm btn-primary
                    btn-rounded waves-effect waves-light"
                    >
                        <span onClick={() => increment(item)}>+</span>
                    </label>
                </div>
            </td>
            <td>{itemTotal} vnd</td>
            <td>
                <button
                    type="button"
                    className="btn btn-sm btn-primary waves-effect waves-light"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Remove item"
                    onClick={() => removeItem(item._id)}
                >
                    X
                </button>
            </td>
        </tr>
    );
}
