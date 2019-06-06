import React from 'react';
import { connect } from 'react-redux';
import { basketAddItem, basketRemoveItem } from './actions/basket';

import { Button } from 'react-bootstrap';

const ProductItem = ({ product, dispatch }) => {
    
    return (
        <div style={{ marginTop: '2rem'}}>
            <h5>{product.name} - {product.price} £ </h5>
            <Button variant="light" size="sm" onClick={() => dispatch(basketAddItem(product))}>+</Button>
            <Button variant="light" size="sm" onClick={() => dispatch(basketRemoveItem(product))} disabled={!product.qty}>-</Button>
        </div>
    )
}

const mapStateToProps = ({ basket }) => ({ basket });
export default connect(mapStateToProps)(ProductItem);