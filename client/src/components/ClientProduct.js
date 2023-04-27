import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";




export default function ClientProduct() {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:8060/product/products')
      .then((getPro) => {
        setProduct(getPro.data);
      });
  }, []);

  const setID = (_id, productID, productName, quantity, type, color, size, productDescription) => {

		localStorage.setItem('productID', productID);
		localStorage.setItem('productName', productName);
		localStorage.setItem('quantity', quantity);
    localStorage.setItem('type', type);
    localStorage.setItem('color', color);
    localStorage.setItem('size', size);
    localStorage.setItem('productDescription', productDescription);
		localStorage.setItem('ID', _id);
	};

 return (
  <>
    {product.map((data) => {
        return (
          <div className="ui">
            <div className="cards" key={data._id}>
            <Link to="/singleP" onClick={() => setID(data._id, data.productID, data.productName, data.quantity, data.type, data.color, data.size, data.productDescription)}>
              <div className="ui link cards">
                  <div className="card">
                  <div className="image">
                    <img src='../images/cropTop' alt={data.productName} />
                  </div>
                  <div className="price">
                    <div className="price">{data.productName}</div>
                    <div className="price"> {data.size}</div>
                    <div className="price">{data.color}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          </div>
          
        )
      })
  
    }
  </>
 )
  
}



