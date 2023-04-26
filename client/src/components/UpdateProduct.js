import React , {useState,useEffect} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function UpdateExpense(){
    const navigate = useNavigate();
    const [ID , setID] = useState(null);
    const [productID, setProID] = useState('');
    const [productName, setProName] = useState('');
    const [quantity, setProQuan] = useState('');
    const [type, setProType] = useState('');
    const [color, setProColor] = useState('');
    const [size, setProSize] = useState('');
    const [productDescription, setProDescrip] = useState('');
    
    const sendDataToUpdate =()=>{
        axios.put('http://localhost:8060/product/updateProduct/'+ID,
        {
            productID, 
            productName, 
            quantity, 
            type, 
            color, 
            size, 
            productDescription
        }
        ).then(() => navigate("/viewP")
        ).then(() => {
            alert("Product Updated")
        }).catch((err) => {
            
            alert(err)
     })

   
    }


    useEffect(()=>{
        setID(localStorage.getItem('ID'));
        setProID(localStorage.getItem('productID'));
        setProName(localStorage.getItem('productName'));
        setProQuan(localStorage.getItem('quantity'));
        setProType(localStorage.getItem('type'));
        setProColor(localStorage.getItem('color'));
        setProSize(localStorage.getItem('size'));
        setProDescrip(localStorage.getItem('productDescription'));

    },[]);

    return (
        
        <div className="limiter">
        <div className="container-login100">
            <div className="wrap-login100">
                <form onSubmit={sendDataToUpdate} className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                    <span className="login100-form-title">
                       Update Product
                    </span>
    
                    <div className="wrap-input100 validate-input m-b-16" data-validate="Enter product ID">
                        <input className="input100" type="text" value={productID} name="pid" placeholder="Product ID" 
            onChange={(e)=>{
                setProID(e.target.value);
            }}/>
                        <span className="focus-input100"></span>
                    </div>
    
                    <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter product name">
                        <input className="input100" type="text" value={productName} name="pname" placeholder="Product name"
            onChange={(e)=>{
                setProName(e.target.value);
            }}/>
                        <span className="focus-input100"></span>
                    </div>
    
                    <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter quantity">
                        <input className="input100" type="text" value={quantity} name="quantity" placeholder="Quantity"
            onChange={(e)=>{
    
                setProQuan(e.target.value);
            }}/>
                        <span className="focus-input100"></span>
                    </div>
    
                    <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter type">
                        <input className="input100" type="text" value={type} name="type" placeholder="Type"
            onChange={(e)=>{
                setProType(e.target.value);
            }}/>
                        <span className="focus-input100"></span>
                    </div>
    
                    <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter color">
                        <input className="input100" type="text" value={color} name="color" placeholder="Color"
            onChange={(e)=>{
                setProColor(e.target.value);
            }}/>
                        <span className="focus-input100"></span>
                    </div>
    
                    <div className="wrap-input100 validate-input m-b-16" data-validate = "Please enter size">
                        <input className="input100" type="text" value={size} name="size" placeholder="Size"
            onChange={(e)=>{
                setProSize(e.target.value);
            }}/>
                        <span className="focus-input100"></span>
                    </div>
    
                    <div className="wrap-input100 validate-input m-b-35" data-validate = "Please enter product description">
                        <input className="input100" type="text" value={productDescription} name="pdescrip" placeholder="Product description"
            onChange={(e)=>{
                setProDescrip(e.target.value);
            }}/>
                        <span className="focus-input100"></span>
                    </div>
                    
                        
                        <div className="flex-col-c p-t-35 p-b-40">
                        <span className="txt1 p-b-9">
                        <Link to="/viewP" className="txt3">
                        <button type="submit" className="login100-form-btn">
                            Update
                        </button>
                        </Link>
                        </span>
                    </div>
    
                    
                </form>
            </div>
        </div>
    </div>

    )

}
