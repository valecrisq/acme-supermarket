import React from 'react';
import { connect } from 'react-redux';
import { basketAddItem, basketRemoveItem } from './actions/basket';

import { Button, Card } from 'react-bootstrap';


const ProductItem = ({ product, dispatch }) => {

    return (
        <div>
            <Card.Title>
                <header>{product.name}</header>
                <footer>{product.price} £</footer>
            </Card.Title>
            <hr />
            <Card.Img variant="bottom" src={product.image} />
            <Button variant="primary" size="sm" onClick={() => dispatch(basketAddItem(product))}>
                <i className="fa fa-plus" />
            </Button>
            <Button variant="primary" size="sm" onClick={() => dispatch(basketRemoveItem(product))} disabled={!product.qty}>
                <i className="fas fa-minus" />
            </Button>
        </div>
    )
}

const mapStateToProps = ({ basket }) => ({ basket });
export default connect(mapStateToProps)(ProductItem);