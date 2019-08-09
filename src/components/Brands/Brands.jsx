import React, { useEffect, useContext } from 'react';
import { AppContext } from '../../services/AppContext';
import './Brands.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function Brands() {
    const { brands, getBrands } = useContext(AppContext);

    useEffect(() => {
        getBrands();
    }, []);

    return (
        <div className="brands-table-container">
            <List>
                <h1>Thương hiệu</h1>
                {brands.map((brand, index) => (
                    <ListItem key={index} button>
                        <ListItemText> {brand.name}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
