import React from 'react';
import ProductItem from './ProductItem';

import { Card } from "react-bootstrap";

import '../styles/ProductItem.css';

const ProductList = ({ products }) => {

    return products.map((product) => {
        return (
            <Card style={{ width: '25%', marginRight: '2rem', marginBottom: '2rem' }}
                key={product.code}>
                <Card.Body>
                    <ProductItem product={product} />
                </Card.Body>
            </Card>
        )
    })

}

export default ProductList;
