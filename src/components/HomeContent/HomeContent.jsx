import React, { useContext } from 'react';
import './HomeContent.scss';
import { AppContext } from '../../services/AppContext';
import Product from '../Product';
import Grid from '@material-ui/core/Grid';
export default function HomeContent() {
    const { products } = useContext(AppContext);
    console.log('products', products);
    return (
        <Grid container className="homecontent" spacing={3}>
            <div className="homecontent-container">
                {products.map((product, index) => (
                    <Grid item xs={3}>
                        <Product key={index} product={product} />
                    </Grid>
                ))}
            </div>
        </Grid>
    );
}
