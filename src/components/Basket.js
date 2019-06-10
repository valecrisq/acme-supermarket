import React from 'react';
import { basketRemoveAll } from '../actions/basket'
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { offers } from '../Offers';
import "../styles/Basket.css";




const Basket = ({ basket, dispatch }) => {

  let total = 0;

  return (
    <div className="basket">
      <header>
        <i className="fa fa-shopping-cart fa-2x" />
        <h5>Your basket</h5>
        <hr/>
      </header>
      <div style={{ marginTop: "6rem" }}>
        {
          basket.length === 0 &&
          <p>Your basket is empty. Try to add something!</p>
        }

        {
          basket.map((item, index) => {

            let { code, qty } = item

            if (item.discount) {
              total += offers[code](item, qty);
            } else {
              total += item.price * item.qty;
            }

            return <div key={index}>{item.name} | {item.price} £ | x{item.qty}<hr /></div>
          })
        }
      </div>

      {
        basket.length > 0 &&
        <footer>
          <div>
            <b>Total</b>: <h5>{total.toFixed(2)} £</h5>
            </div>
          <Button variant="primary" size="sm" disabled={!basket} onClick={() => dispatch(basketRemoveAll(basket))}>Remove All</Button>
        </footer>
      }

    </div>
  )
};

const mapStateToProps = ({ basket }) => ({ basket })
export default connect(mapStateToProps)(Basket);
