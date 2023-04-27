import React from 'react'
import '../css/navBar.css'
import { Link } from 'react-router-dom';

const NavBar = ({click}) => {
  return (
    <nav className='navBar'>
        <div className='navBar__logo'>
            <h2>FunkyPop</h2>
        </div>

        <ul className='navBar__links'> 
            <li>
                <Link to="/#">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/cart" className='cart__link'>
                    <i className='fas fa-shopping-cart'></i>
                    <span>
                        Cart
                        <span className='cartLogo__badge'>0</span>
                    </span>
                </Link>
            </li>
        </ul>

        <div className='navBar__hambuger-menu' onClick={click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>
  )
}

export default NavBar
