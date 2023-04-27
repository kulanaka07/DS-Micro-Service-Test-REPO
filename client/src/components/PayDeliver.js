import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/paymentDelivery.css";
import "../css/cusLoginUtil.css";

export default function PayDeliver() {
  const [customerName, setcustomerName] = React.useState("");
  const [customerPhone, setcustomerPhone] = React.useState("");
  const [deliveryAddress, setdeliveryAddress] = React.useState("");
  const [email, setEmail]= React.useState("");

  return (
    <div className="paydeliver">
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form>
              <div className="row">
                <div className="col-50">
                  <h3 className="m-b-20">Delivery Details</h3>
                  <label htmlFor="fname">
                    <i className="fa fa-user"></i> Customer Name
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setcustomerName(e.target.value);
                    }}
                  />
                  <label htmlFor="adr">
                    <i className="fa fa-address-card-o"></i> Customer Phone
                    Number
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setcustomerPhone(e.target.value);
                    }}
                  />
                  <label htmlFor="city">
                    <i className="fa fa-institution"></i> Address
                  </label>
                  <input
                    type="text"
                    onChange={(e) => {
                      setdeliveryAddress(e.target.value);
                    }}
                  />

                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="state">Email</label>
                      <input
                        type="text"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-50">
                  <h3 className="m-b-20">Payment</h3>

                  <label htmlFor="cname">Name on Card</label>
                  <input type="text" />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input type="text" />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input type="text" />

                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input type="text" />
                    </div>
                    <div className="col-50">
                      <label htmlFor="cvv">CVV</label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to="/confirmpay"
                state={{
                  customerName: customerName,
                  customerPhone: customerPhone,
                  deliveryAddress: deliveryAddress,
                  email: email,
                }}
              >
                <input style={{ marginLeft: "10px" }} type="submit" />
                {/* <button type="button" className="paydeliverybtn">
                  Continue to Checkout
                </button> */}
              </Link>
            </form>
          </div>
        </div>
      </div>
      </div>
      );
}