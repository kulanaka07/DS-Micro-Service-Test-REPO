import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../css/customerLogin.css";

export default function CustomerSignup() {
  const history = useNavigate();

  const [CustomerName, setCusName] = useState("");
  const [CustomerEmail, setCusEmail] = useState("");
  const [ContactNum, setCusNum] = useState("");
  const [Address, setCusAddress] = useState("");
  const [CusUsername, setCusUsername] = useState("");
  const [CusPassword, setCusPassword] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newCustomer = {
      CustomerName,
      CustomerEmail,
      ContactNum,
      Address,
      CusUsername,
      CusPassword,
    };

    //send http request
    axios
      .post("http://localhost:8050/customer/signup", newCustomer)
      .then(() => {
        alert("Customer added");
        history("/login");
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
            <span className="login100-form-title">Register</span>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Please enter username"
            >
              <input
                className="input100"
                type="text"
                name="username"
                placeholder="Name"
                onChange={(e) => {
                  setCusName(e.target.value);
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
                  setCusEmail(e.target.value);
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
                placeholder="Contact Number"
                onChange={(e) => {
                  setCusNum(e.target.value);
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
                placeholder="Address"
                onChange={(e) => {
                  setCusAddress(e.target.value);
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
                  setCusUsername(e.target.value);
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
                  setCusPassword(e.target.value);
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
