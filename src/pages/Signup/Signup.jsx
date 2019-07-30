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
// // import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";

// import { apiLinks } from "../../services/APILinks";
// import axios from "axios";
// import { Form, ErrorMessage, Formik } from "formik";
// import * as yup from "yup";

// function MadeWithLove() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Built with love by the "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Material-UI
//       </Link>
//       {" team."}
//     </Typography>
//   );
// }

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
//     marginTop: theme.spacing(3)
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2)
//   }
// }));

// function SignUp(props) {
//   const classes = useStyles();

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
//         <Typography component="h1" variant="h5">
//           Sign up
//         </Typography>
//         <Form className={classes.form}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 autoComplete="fname"
//                 name="name"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="Full Name"
//                 type="text"
//                 autoFocus
//                 onChange={props.handleChange}
//               />
//               <div className="error">
//                 <ErrorMessage name="name" />
//               </div>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 type="text"
//                 onChange={props.handleChange}
//               />
//               <div className="error">
//                 <ErrorMessage name="email" />
//               </div>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="phone"
//                 label="Phone Number"
//                 name="phone"
//                 type="text"
//                 autoComplete="phone"
//                 onChange={props.handleChange}
//               />
//               <div className="error">
//                 <ErrorMessage name="phone" />
//               </div>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 onChange={props.handleChange}
//               />
//               <div className="error">
//                 <ErrorMessage name="password" />
//               </div>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="passwordconfirm"
//                 label="Confirm Password"
//                 name="passwordconfirm"
//                 type="password"
//                 onChange={props.handleChange}
//               />
//               <div className="error">
//                 <ErrorMessage name="passwordconfirm" />
//               </div>
//             </Grid>
//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={<Checkbox value="allowExtraEmails" color="primary" />}
//                 label="I want to receive inspiration, marketing promotions and updates via email."
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign Up
//           </Button>
//           <Grid container justify="flex-end">
//             <Grid item>
//               <Link href="#" variant="body2">
//                 Already have an account? Sign in
//               </Link>
//             </Grid>
//           </Grid>
//         </Form>
//       </div>
//       <Box mt={5}>{/* <MadeWithLove /> */}</Box>
//     </Container>
//   );
// }

// const SignupValidation = yup.object().shape({
//   name: yup.string().required(),
//   email: yup
//     .string()
//     .email("invalid email")
//     .required(),
//   phone: yup.string().required(),
//   password: yup
//     .string()
//     .min(6)
//     .max(16)
//     .required(),

//   passwordconfirm: yup.string().oneOf([yup.ref("password"), null])
// });

// class SignUpContainer extends Component {
//   initialValues = {
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     passwordconfirm: ""
//   };

//   onSubmit = (values, actions) => {
//     let signupLink = apiLinks.signup;
//     axios
//       .post(signupLink, {
//         name: values.name,
//         email: values.email,
//         phone: values.phone,
//         password: values.password,
//         dob: "1/1/2019"
//       })
//       .then(function(response) {
//         console.log(response);
//         if (response.data && response.data.email) {
//           this.props.history.goBack();
//           console.log("Authenticated");
//         }
//       })
//       .catch(function(error) {
//         console.log("Error on Authentication");
//       })
//       .finally(() => {
//         actions.setSubmitting(false);
//       });
//     // Simulates the delay of a real request
//     setTimeout(() => actions.setSubmitting(false), 3 * 1000);
//   };

//   render() {
//     return (
//       <Formik
//         initialValues={this.initialValues}
//         onSubmit={this.onSubmit}
//         validationSchema={SignupValidation}
//         render={(props) => <SignUp {...props} />}
//       />
//     );
//   }
// }
// export default SignUpContainer;

import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return <div>this is signup page</div>;
  }
}

export default Signup;
