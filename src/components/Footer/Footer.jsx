import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Footer.scss';
import { makeStyles } from '@material-ui/core/styles';
import payment from '../../img/payment.jpg';
const useStyles = makeStyles(theme => ({
  footerItem: {},
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={3}>
          <div className="single-footer">
            <h3>Contact Us</h3>
            <div className="footer-content">
              <div className="loc-address">
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                  Your address goes here
                </span>
                <span>
                  <i className="far fa-envelope"></i>
                  Mail Us : info@example.com
                </span>
                <span>
                  <i className="fas fa-phone"></i>
                  Phone: + 00 123 456789 10
                </span>
              </div>

              <div className="payment-method">
                <img src={payment} alt="payment" />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3} className={classes.footerItem}>
          <div className="single-footer">
            <h3>Information</h3>
            <div className="footer-content">
              <ul className="footer-list">
                <li>Delivery Information</li>
                <li>Order History</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="single-footer">
            <h3>My Account</h3>
            <div className="footer-content">
              <ul className="footer-list">
                <li>Login</li>
                <li>My Account</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="single-footer">
            <h3>Let Us Help You</h3>
            <div className="footer-content">
              <ul className="footer-list">
                <li>Login</li>
                <li>My Account</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>

      {/* footer-bottom */}

      <div className="footer-bottom-content">
        <span>
          <i class="far fa-copyright"></i> Oto 2019
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
      </div>
    </React.Fragment>
  );
}
