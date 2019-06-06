import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductList from './ProductList';


const ProductContainer = () => {
    const [products, setProducts] = useState([]);

    async function getProducts() {
        const response = await axios.get('./data.json');
        setProducts(response.data.products);
    }

    useEffect(()=> {
        getProducts();
    }, [])

    return (
        <div>
            <ProductList products={products} />
        </div>
    )
}

export default ProductContainer;