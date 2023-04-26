import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios";

export default function ProductRate() {
  const navigate = useNavigate();

  const componentRef = useRef();
  const [rt, setRt] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8070/productRate/productRates").then(
      (getData) => {
        setRt(getData.data);
      }
    );
  }, [rt]);

  return (
    <section className="ftco-section">
      <div className="container">
        <br></br>
        <br></br>
        <center>
          <h1>All Orders</h1>
          <br></br>
        </center>
        <div
          ref={componentRef}
          style={{ width: "100%", height: window.innerHeight }}
        >
          <center>
            <div
              ref={componentRef}
              style={{
                width: "100%",
                height: window.innerHeight,
                textAlign: "center",
              }}
            >
              <table
                className="table"
                style={{ width: "75%", margin: "0 auto" }}
              >
                <thead>
                  <tr>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Comment</th>
                  </tr>
                </thead>
                {rt.map((data) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{data.customerName}</td>
                        <td>{data.productName}</td>
                        <td>{data.rate}</td>
                        <td>{data.comment}</td>
                        <br></br>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </center>
        </div>
      </div>
    </section>
  );
}
