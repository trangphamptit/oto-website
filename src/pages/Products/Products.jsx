import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../services/AppContext';
import Product from '../../components/Product';
import './Products.scss';
export default function Products(props) {
    const { products, getProducts } = useContext(AppContext);
    useEffect(() => {
        getProducts();
    }, []);
    // console.log('products', products);
    return (
        <section className="section">
            <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
            <div className="row">
                {products.map((product, index) => (
                    <Product key={index} product={product} />
                ))}
            </div>
        </section>
    );
}
