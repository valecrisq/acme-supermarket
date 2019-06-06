import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
    return products.map((product) => {
        return (
            <div key={product.code}>
                <ProductItem product={product} />
            </div>
        )
    })
}

export default ProductList;