import React, { useEffect, useContext } from 'react';
import { AppContext } from '../../services/AppContext';
import '../Brands/Brands.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function Categories() {
    const { categories, getCategories } = useContext(AppContext);

    useEffect(() => {
        getCategories();
    }, []);
    return (
        <div className="brands-table-container">
            <List>
                <h1>Danh mục sản phẩm</h1>
                {categories.map((category, index) => (
                    <ListItem key={index} button>
                        <ListItemText> {category.name}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
