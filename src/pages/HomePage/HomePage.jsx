import React from 'react';
import Grid from '@material-ui/core/Grid';
import Brands from '../../components/Brands/Brands';
import HomeContent from '../../components/HomeContent/HomeContent';
import Categories from '../../components/Categories/Categories';
const HomePage = () => {
    return (
        <Grid container justify="center">
            <Grid item xs={3}>
                <Brands />
                <Categories />
            </Grid>
            <Grid item xs={9}>
                <HomeContent />
            </Grid>
        </Grid>
    );
};

export default HomePage;
