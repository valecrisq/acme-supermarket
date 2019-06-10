import React from 'react';
import ProductContainer from './ProductContainer';
import Basket from './Basket';

import '../styles/Main.css';

const Main = () => {
    return (
        <div className='main'>
            <ProductContainer />
            <Basket />
        </div>
    )
}

export default Main
