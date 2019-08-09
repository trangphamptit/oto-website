import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

import { apilinks } from '../../services/APILinks';
import axios from 'axios';
import { Form, ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import useStyles from './SignupStyle';

function SignUp(props) {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    {/* <LockOutlinedIcon /> */}
                </Avatar>
                <Typography component="h1" variant="h5">
                    Đăng ký
                </Typography>
                <Form className={classes.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Họ và tên"
                                type="text"
                                autoFocus
                                onChange={props.handleChange}
                            />
                            <div className="error">
                                <ErrorMessage name="name" />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                type="text"
                                onChange={props.handleChange}
                            />
                            <div className="error">
                                <ErrorMessage name="email" />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="phone"
                                label="Số điện thoại"
                                name="phone"
                                type="text"
                                autoComplete="phone"
                                onChange={props.handleChange}
                            />
                            <div className="error">
                                <ErrorMessage name="phone" />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Mật khẩu"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={props.handleChange}
                            />
                            <div className="error">
                                <ErrorMessage name="password" />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="passwordconfirm"
                                label="Xác nhận mật khẩu"
                                name="passwordconfirm"
                                type="password"
                                onChange={props.handleChange}
                            />
                            <div className="error">
                                <ErrorMessage name="passwordconfirm" />
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="allowExtraEmails"
                                        color="primary"
                                    />
                                }
                                label="Nhận thông báo"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Đăng ký
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/login" variant="body2">
                                Bạn đã có tài khoản? Đăng nhập
                            </Link>
                        </Grid>
                    </Grid>
                </Form>
            </div>
        </Container>
    );
}

const SignupValidation = yup.object().shape({
    name: yup.string().required(),
    email: yup
        .string()
        .email('invalid email')
        .required(),
    phone: yup.string().required(),
    password: yup
        .string()
        .min(6)
        .max(16)
        .required(),

    passwordconfirm: yup.string().oneOf([yup.ref('password'), null]),
});

class SignUpContainer extends Component {
    initialValues = {
        name: '',
        email: '',
        phone: '',
        password: '',
        passwordconfirm: '',
    };

    onSubmit = (values, actions) => {
        let signupLink = apilinks.signup;
        axios
            .post(signupLink, {
                name: values.name,
                email: values.email,
                phone: values.phone,
                password: values.password,
                dob: '1/1/2019',
                customerRank: '5d4ba20557790b011963d5f6',
            })
            .then(function(response) {
                console.log(response);
                if (response.data && response.data.email) {
                    this.props.history.goBack();
                    console.log('Authenticated');
                }
            })
            .catch(function(error) {
                console.log('Error on Authentication');
            })
            .finally(() => {
                actions.setSubmitting(false);
            });
        // Simulates the delay of a real request
        setTimeout(() => actions.setSubmitting(false), 3 * 1000);
    };

    render() {
        return (
            <Formik
                initialValues={this.initialValues}
                onSubmit={this.onSubmit}
                validationSchema={SignupValidation}
                render={props => <SignUp {...props} />}
            />
        );
    }
}
export default SignUpContainer;
