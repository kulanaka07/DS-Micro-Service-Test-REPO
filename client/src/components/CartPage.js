import React from "react";
import "../css/cartPage.css";
import "../components/CartItem";
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import CartItem from "../components/CartItem";

const CartPage = () => {
  // const dispatch = useDispatch();

  //const cart = useSelector(state => state.cart);
  //const CartItems = cart;

  return (
    <div className="cartPage">
      <div className="cartPage__left">
        <h2>Shopping Cart</h2>
        <CartItem />
        {/* {CartItem.length === 0 ? (
          <div>
            Your cart is empty <Link to='/'>Go Back</Link>
          </div>
        ) : (
          CartItems.map((item) => <CartItem />)
        )} */}
      </div>

      <div className="cartPage__right">
        <div className="cartPage__info">
          <p>Sub Total (1 ) items</p>
          <p>2000.00</p>
        </div>

        <div>
          <Link to="/pay">
            <button>Check Out</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
