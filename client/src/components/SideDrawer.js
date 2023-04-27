import React from 'react';
import { Link } from "react-router-dom";
import "../css/sideDrawer.css";

const SideDrawer = ({show, click}) => {
  
  const sideDrawerClass = ["sideDrawer"];
if(show){
  sideDrawerClass.push("show");
}

  return (
    <div className= {sideDrawerClass.join(" ")}>
      <ul className='sideDrawer__links' onClick={click}>
        <li>
          <Link to="#Home"> 
            Home
          </Link>
        </li>

        <li>
          <Link to="/cart">
            <i className='fas fa-shopping-cart'></i>
            <span>
              Cart 
              <span className='sideDrawer__cart-badge'>0</span>
            </span> 
          </Link>
        </li>

      </ul>
    </div>
  )
}

export default SideDrawer
