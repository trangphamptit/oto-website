import React, { useContext } from 'react';
import './HomeContent.scss';
import { AppContext } from '../../services/AppContext';
import Product from '../Product';
import Grid from '@material-ui/core/Grid';
export default function HomeContent() {
    const { products } = useContext(AppContext);
    return (
        <Grid className="homecontent" spacing={3}>
            {/* <Products /> */}
            <div className="homecontent-container">
                {products.map((product, index) => (
                    <Grid xs={3}>
                        <Product key={index} product={product} />
                    </Grid>
                ))}
            </div>
        </Grid>
    );
}
