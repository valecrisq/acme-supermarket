import React from 'react';
import { offers } from './Offers'

import { connect } from 'react-redux';

const Basket = ({ basket, }) => {

  let total = 0;

  return (
    <div>
      <div>
        <header>
          <div>Your basket</div>
        </header>
        <div>
        {
          basket.length === 0 &&
          <p>There's nothing here. Try to add something</p>
        } 

        {
          basket.map((item, index) => {

            let { code, qty } = item

            total += offers[code](item, qty);
            
            return <div key={index}>{item.name} | {item.price} £ | x{item.qty}</div>
          })
        }
        </div>

        {
          basket.length > 0 && 
          <footer>
            <div>
              <b>Total</b>: {total.toFixed(2)} £  
            </div>
          </footer>
        }

      </div>
    </div>
  )
};

const mapStateToProps = ({ basket }) => ({ basket }) 
export default connect(mapStateToProps)(Basket);