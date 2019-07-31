import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { AppContext } from '../../services/AppContext';
import Product from '../../components/Product';

export default function Products(props) {
    const { products } = useContext(AppContext);
    const { brands, getBrands } = useContext(AppContext);
    useEffect(() => {
        getBrands();
    }, []);
    console.log('brands', brands);
    // console.log('products', products);
    return (
        <Grid container justify="center" spacing={3}>
            {products.map((product, index) => (
                <Grid item xs={3}>
                    <Product key={index} product={product} />
                </Grid>
            ))}
        </Grid>
    );
}
