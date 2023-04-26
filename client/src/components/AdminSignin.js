import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../css/customerLogin.css";
import "../css/cusLoginUtil.css";

export default function AdminSignin() {
  const navigate = useNavigate(); // use navigate instead of history

  const [AdminEmail, setAdminEmail] = useState("");
  const [AdminPassword, setAdminPassword] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newLogin = {
      email: AdminEmail,
      password: AdminPassword,
    };

    //send http request
    axios.post("http://localhost:8080/admin/login", newLogin).then((resp) => {
      //alert("Login Successful");
      navigate("/adminPage"); // navigate to new page upon successful login
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
            <span className="login100-form-title">Admin Sign In</span>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Please enter username"
            >
              <input
                className="input100"
                type="text"
                name="username"
                placeholder="Email"
                onChange={(e) => {
                  setAdminEmail(e.target.value);
                }}
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter password"
            >
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder="Password"
                onChange={(e) => {
                  setAdminPassword(e.target.value);
                }}
              />
              <span className="focus-input100"></span>
            </div>

            <br></br>
            <div className="container-login100-form-btn">
              <br></br>
              <button className="login100-form-btn">Log in</button>
              <br></br>
            </div>
            <br></br>
          </form>
        </div>
      </div>
    </div>
  );
}
