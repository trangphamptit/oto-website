import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Phương thức thanh toán
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardName"
                        label="Tên ngân hàng"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        label="Số thẻ"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="expDate"
                        label="Ngày hết hạn"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
