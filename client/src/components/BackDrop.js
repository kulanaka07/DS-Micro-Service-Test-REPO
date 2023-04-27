import React from 'react'
import "../css/backDrop.css";

const BackDrop = ({show, click}) => {
  return show && <div className='backDrop' onClick={click}>
      
    </div>
  
}

export default BackDrop
