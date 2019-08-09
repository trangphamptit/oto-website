import React, { useContext } from 'react';
import './Modal.scss';
import { AppContext } from '../../services/AppContext';
import { Link } from 'react-router-dom';
import product from '../../img/product.jpg';

export default function Modal() {
    const { modalOpen, closeModal } = useContext(AppContext);
    if (!modalOpen) {
        return null;
    } else {
        return (
            <div className=" modalOpen container">
                <div className="row">
                    <div
                        id="modal"
                        className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                    >
                        <h5>add to cart successful</h5>
                        <img
                            style={{ marginBottom: '15px' }}
                            src={product}
                            className="img-fluid"
                            alt="success"
                        />

                        <Link to="/">
                            <button
                                className="btn btn-danger text-uppercase mb-3"
                                onClick={() => closeModal()}
                            >
                                home
                            </button>
                        </Link>
                        <Link to="/cart">
                            <button
                                className="btn btn-danger text-uppercase mb-3 "
                                onClick={() => closeModal()}
                            >
                                go to cart
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
