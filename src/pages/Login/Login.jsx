// import React, { Component } from "react";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";

// import { Form, Field, ErrorMessage, Formik } from "formik";
// import axios from "axios";
// import { AppContext } from "../../services/AppContext";
// import * as yup from "yup";
// const HISTORY_LENGTH_FIRST_HIT = 2;
// const LoginValidation = yup.object().shape({
//   email: yup.string().required(),
//   password: yup
//     .string()
//     .min(6)
//     .max(16)
//     .required()
// });

// const useStyles = makeStyles((theme) => ({
//   "@global": {
//     body: {
//       backgroundColor: theme.palette.common.white
//     }
//   },
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1)
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2)
//   }
// }));

// const SignIn = (props) => {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>
//         <Form className={classes.form}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             onChange={props.handleChange}
//           />
//           <div className="error">
//             <ErrorMessage name="email" />
//           </div>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             onChange={props.handleChange}
//           />
//           <div className="error">
//             <ErrorMessage name="password" />
//           </div>
//           <FormControlLabel
//             control={<Checkbox value="remember" color="primary" />}
//             label="Remember me"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign In
//           </Button>
//           <Grid container>
//             <Grid item xs>
//               <Link href="#" variant="body2">
//                 Forgot password?
//               </Link>
//             </Grid>
//             <Grid item>
//               <Link href="#" variant="body2">
//                 {"Don't have an account? Sign Up"}
//               </Link>
//             </Grid>
//           </Grid>
//         </Form>
//       </div>
//       <Box mt={5} />
//     </Container>
//   );
// };

// class LoginContainer extends Component {
//   initialValues = {
//     email: "",
//     password: ""
//   };

//   onSubmit = (values, actions) => {
//     const {
//       context: { login }
//     } = this;
//     const { history } = this.props;
//     const { login: loginLink } = apiLinks;
//     const { email, password } = values;

//     axios
//       .post(loginLink, { email, password })
//       .then((response) => {
//         const { data } = response;
//         if (data && data.email) {
//           login(data);
//           if (history.length > HISTORY_LENGTH_FIRST_HIT) {
//             history.goBack();
//           } else {
//             history.push("/"); // push to root
//           }
//         } else {
//           alert("email or password is wrong");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         alert("Internal server error!");
//       })
//       .finally(() => {
//         actions.setSubmitting(false);
//       });
//   };

//   render() {
//     return (
//       <Formik
//         initialValues={this.initialValues}
//         onSubmit={this.onSubmit}
//         validationSchema={LoginValidation}
//         render={(props) => <SignIn {...props} />}
//       />
//     );
//   }
// }

// LoginContainer.contextType = AppContext;
// export default LoginContainer;
import React, { Component } from 'react';

class Login extends Component {
  render() {
    return <div>this is login page</div>;
  }
}

export default Login;
