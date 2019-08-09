// // import React from 'react';
// // import Grid from '@material-ui/core/Grid';
// // import Typography from '@material-ui/core/Typography';
// // import TextField from '@material-ui/core/TextField';
// // import FormControlLabel from '@material-ui/core/FormControlLabel';
// // import Checkbox from '@material-ui/core/Checkbox';
// // import { Form, ErrorMessage, Formik } from 'formik';
// // import * as yup from 'yup';
// // export default function AddressForm() {
// //     return (
// //         <React.Fragment>
// //             <Typography variant="h6" gutterBottom>
// //                 Địa chỉ giao hàng
// //             </Typography>
// //             <Grid container spacing={3}>
// //                 <Grid item xs={12} sm={6}>
// //                     <TextField
// //                         required
// //                         id="firstName"
// //                         name="firstName"
// //                         label="Họ"
// //                         fullWidth
// //                         autoComplete="fname"
// //                     />
// //                 </Grid>
// //                 <Grid item xs={12} sm={6}>
// //                     <TextField
// //                         required
// //                         id="lastName"
// //                         name="lastName"
// //                         label="Tên"
// //                         fullWidth
// //                         autoComplete="lname"
// //                     />
// //                 </Grid>

// //                 <Grid item xs={12} sm={6}>
// //                     <TextField
// //                         id="state"
// //                         name="state"
// //                         label="Quận/ Huyện"
// //                         fullWidth
// //                     />
// //                 </Grid>
// //                 <Grid item xs={12} sm={6}>
// //                     <TextField
// //                         id="state"
// //                         name="state"
// //                         label="Số điện thoại"
// //                         fullWidth
// //                     />
// //                 </Grid>

// //                 <Grid item xs={12}>
// //                     <FormControlLabel
// //                         control={
// //                             <Checkbox
// //                                 color="secondary"
// //                                 name="saveAddress"
// //                                 value="yes"
// //                             />
// //                         }
// //                         label="Sử dụng địa chỉ này"
// //                     />
// //                 </Grid>
// //             </Grid>
// //         </React.Fragment>
// //     );
// // }
// import React from 'react';
// import { withFormik } from 'formik';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// const AddressForm = props => {
//     const {
//         values,
//         touched,
//         errors,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//     } = props;
//     return (
//         <form onSubmit={handleSubmit}>
//             <Typography variant="h6" gutterBottom>
//                 Địa chỉ giao hàng
//             </Typography>
//             <Grid container spacing={3}>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         required
//                         id="name"
//                         name="name"
//                         label="Họ và tên"
//                         fullWidth
//                         autoComplete="fname"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         value={values.name}
//                     />
//                 </Grid>

//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         id="state"
//                         name="state"
//                         label="Quận/ Huyện"
//                         fullWidth
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                     <TextField
//                         id="state"
//                         name="state"
//                         label="Số điện thoại"
//                         fullWidth
//                     />
//                 </Grid>

//                 <Grid item xs={12}>
//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 color="secondary"
//                                 name="saveAddress"
//                                 value="yes"
//                             />
//                         }
//                         label="Sử dụng địa chỉ này"
//                     />
//                 </Grid>
//             </Grid>

//             {/* <input
//                 type="text"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.name}
//                 name="name"
//             />
//             {errors.name && touched.name && (
//                 <div id="feedback">{errors.name}</div>
//             )}
//             <button type="submit">Submit</button> */}
//         </form>
//     );
// };

// const AddressFormik = withFormik({
//     mapPropsToValues: () => ({ name: '' }),

//     // Custom sync validation
//     validate: values => {
//         const errors = {};

//         if (!values.name) {
//             errors.name = 'Required';
//         }

//         return errors;
//     },

//     handleSubmit: (values, { setSubmitting }) => {
//         setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//         }, 1000);
//     },

//     displayName: 'BasicForm',
// })(AddressForm);
// export default AddressForm;
import React, { Component } from 'react';

class AddressForm extends Component {
    render() {
        return <div></div>;
    }
}

export default AddressForm;
