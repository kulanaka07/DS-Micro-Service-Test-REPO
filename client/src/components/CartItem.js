import React from 'react';
import '../css/cartItem.css';
import { Link } from 'react-router-dom';

const CartItem = () => {
  return (
    <div className='cartItem'>
        <div className='cartItem__Img'>
            Image.
        </div>

        <Link to={`/product/${111}`} className='cartItem__name'>
            <p>Product Name.</p>   
        </Link>

        <p className='cartItem__price'>2000.00</p>

        <select className='cartItem__select'>
            <option value='1' id='opt1'>1</option>
            <option value='2' id='opt1'>2</option>
            <option value='3' id='opt1'>3</option>
            <option value='4' id='opt1'>4</option>
            <option value='5' id='opt1'>5</option>
        </select>

        <button className='cartItem__deleteBtn'>
            <i className='fas fa-trash'></i>
        </button>
    </div>
  )
}

export default CartItem
