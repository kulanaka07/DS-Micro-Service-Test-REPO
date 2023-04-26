import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function SellerSignup() {
  const history = useNavigate();

  const [SellerName, setSellerName] = useState("");
  const [SellerEmail, setSellerEmail] = useState("");
  const [SellerUsername, setSellerUsername] = useState("");
  const [SellerPassword, setSellerPassword] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newSeller = {
      SellerName,
      SellerEmail,
      SellerUsername,
      SellerPassword,
    };

    //send http request
    axios
      .post("http://localhost:8050/seller/signup", newSeller)
      .then(() => {
        alert("Customer added");
        history("/slogin");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form
            onSubmit={sendData}
            className="login100-form validate-form p-l-55 p-r-55 p-t-178"
          >
            <span className="login100-form-title">Register your shop</span>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Please enter username"
            >
              <input
                className="input100"
                type="text"
                name="username"
                placeholder="Shop name"
                onChange={(e) => {
                  setSellerName(e.target.value);
                }}
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Please enter password"
            >
              <input
                className="input100"
                type="email"
                name="pass"
                placeholder="Email"
                onChange={(e) => {
                  setSellerEmail(e.target.value);
                }}
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Please enter password"
            >
              <input
                className="input100"
                type="text"
                name="pass"
                placeholder="Username"
                onChange={(e) => {
                  setSellerUsername(e.target.value);
                }}
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input m-b-35"
              data-validate="Please enter password"
            >
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Password"
                onChange={(e) => {
                  setSellerPassword(e.target.value);
                }}
              />
              <span className="focus-input100"></span>
            </div>

            <button className="login100-form-btn">Signup</button>

            <div className="flex-col-c p-t-35 p-b-40">
              <span className="txt1 p-b-9">Already have an account?</span>

              <Link to="#" className="txt3">
                Login now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
