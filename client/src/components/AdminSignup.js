import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../css/customerLogin.css";

export default function AdminSignup() {
  const history = useNavigate();

  const [AdminName, setAdminName] = useState("");
  const [AdminEmail, setAdminEmail] = useState("");
  const [AdminPassword, setAdminPassword] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newAdmin = {
      AdminName,
      AdminEmail,
      AdminPassword,
    };

    //send http request
    axios
      .post("http://localhost:8080/admin/signup", newAdmin)
      .then(() => {
        alert("Admin added");
        history("/AdminSignin");
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
            <span className="login100-form-title">Admin Register</span>

            <div
              className="wrap-input100 validate-input m-b-16"
              data-validate="Please enter username"
            >
              <input
                className="input100"
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => {
                  setAdminName(e.target.value);
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
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  setAdminEmail(e.target.value);
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
                type="password"
                name="pass"
                placeholder="Password"
                onChange={(e) => {
                  setAdminPassword(e.target.value);
                }}
              />
              <span className="focus-input100"></span>
            </div>

            <button className="login100-form-btn">Register</button>

            <div className="flex-col-c p-t-170 p-b-40">
              <span className="txt1 p-b-9">Already have an account?</span>

              <Link to="/AdminSignin" className="txt3">
                Sign in now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
