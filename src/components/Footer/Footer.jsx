import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Footer.scss';
import { makeStyles } from '@material-ui/core/styles';
import payment from '../../img/payment.jpg';
const useStyles = makeStyles(theme => ({
    footerItem: {},
}));
export default function Footer() {
    const classNamees = useStyles();
    return (
        <footer className="footer">
            <Grid container justify="center" spacing={2}>
                <Grid item xs={3}>
                    <div className="single-footer">
                        <h3>Liên hệ </h3>
                        <div className="footer-content">
                            <div className="loc-address">
                                <span>
                                    <i className="far fa-envelope"></i>
                                    Email : info@example.com
                                </span>
                                <span>
                                    <i className="fas fa-phone"></i>
                                    Số điện thoại: + 00 123 456789 10
                                </span>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3} className={classNamees.footerItem}>
                    <div className="single-footer">
                        <h3>Về chúng tôi</h3>
                        <div className="footer-content">
                            <ul className="footer-list">
                                <li>Giới thiệu</li>
                                <li>Tuyển dụng</li>
                            </ul>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className="single-footer">
                        <h3>Hỗ trợ khách hàng</h3>
                        <div className="footer-content">
                            <ul className="footer-list">
                                <li>Chính sách đổi trả</li>
                                <li>Hỗ trợ khách hàng</li>
                            </ul>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className="single-footer">
                        <h3>Phương thức thanh toán</h3>
                        <div className="payment-method">
                            <img src={payment} alt="payment" />
                        </div>
                    </div>
                </Grid>
            </Grid>

            {/* footer-bottom */}

            {/* <div className="footer-bottom-content">
                <span>
                    <i className="far fa-copyright"></i> Oto 2019
                </span>
                <ul className="social-media">
                    <li>
                        <i className="fab fa-facebook-f"></i>
                    </li>
                    <li>
                        <i className="fab fa-youtube"></i>
                    </li>
                    <li>
                        <i className="fab fa-twitter"></i>
                    </li>
                </ul>
            </div> */}
            <div className="footer-copyright">
                <div className="container-fluid">
                    © 2016 Copyright:
                    <a href="http://www.MDBootstrap.com"> MDBootstrap.com </a>
                </div>
            </div>
        </footer>
    );
}
