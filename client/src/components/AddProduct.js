import React, { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from "axios";
import '../css/customerLogin.css';

export default function AddProduct() {


  const [productID, setPID] = useState("");
  const [productName, setPName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [productDescription, setPDescrip] = useState("");

  function sendData(e){

    e.preventDefault();
    const newProduct = {
        productID,
        productName,
        quantity,
        type,
        color,
        size,
        productDescription
    }
    console.log(newProduct);
    //send http request
    axios.post("http://localhost:8060/product/addProduct",newProduct).then(()=>{
        alert("New Product added");
        // history("/login");
    }).catch((err)=>{
        alert(err)
    })

  }
  
  return (
    <div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
            <form onSubmit={sendData} className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                <span className="login100-form-title">
                    Add Product
                </span>

                <div className="wrap-input100 validate-input m-b-16" data-validate="Enter product ID">
                    <input className="input100" type="text" name="pid" placeholder="Product ID" 
        onChange={(e)=>{
            setPID(e.target.value);
        }}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter product name">
                    <input className="input100" type="text" name="pname" placeholder="Product name"
        onChange={(e)=>{
            setPName(e.target.value);
        }}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter quantity">
                    <input className="input100" type="text" name="quantity" placeholder="Quantity"
        onChange={(e)=>{

            setQuantity(e.target.value);
        }}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter type">
                    <input className="input100" type="text" name="type" placeholder="Type"
        onChange={(e)=>{
            setType(e.target.value);
        }}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter color">
                    <input className="input100" type="text" name="color" placeholder="Color"
        onChange={(e)=>{
            setColor(e.target.value);
        }}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter size">
                    <input className="input100" type="text" name="size" placeholder="Size"
        onChange={(e)=>{
            setSize(e.target.value);
        }}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input m-b-35" data-validate = "Please enter product description">
                    <input className="input100" type="text" name="pdescrip" placeholder="Product description"
        onChange={(e)=>{
            setPDescrip(e.target.value);
        }}/>
                    <span className="focus-input100"></span>
                </div>
                
                    <button type="submit" className="login100-form-btn">
                        Add Product
                    </button>
                    <div className="flex-col-c p-t-35 p-b-40">
                    <span className="txt1 p-b-9">
                    <Link to="/signup" className="txt3">
                        I don't want to be in ths page
                    </Link>
                    </span>
                </div>

                
            </form>
        </div>
    </div>
</div>
  )
}



