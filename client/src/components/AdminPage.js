import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "../css/adminLogin.css";

export default function AdminPage() {
  const componentRef = useRef();
  const [admin, setAdmin] = useState([]);
  const [adm, setadm] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8070/order/orders").then((getData) => {
      setadm(getData.data);
    });
  }, [adm]);
  const setID = (
    _id,
    CustomerName,
    ProductName,
    quantity,
    orderDate,
    status
  ) => {
    localStorage.setItem("id", _id);
    localStorage.setItem("CustomerName", CustomerName);
    localStorage.setItem("ProductName", ProductName);
    localStorage.setItem("quantity", quantity);
    localStorage.setItem("orderDate", orderDate);
    localStorage.setItem("status", status);
  };
  const handleLogOut = () => {
    window.location.href = "http://localhost:3000/adminLogin";
  };
  return (
    <section className="ftco-section">
      <div className="container">
        <br></br>
        <br></br>
        <center>
          <br></br>
          <h1>All Orders</h1>
          <br />
          <button
            type="button"
            className="btn btn-dark logout-button"
            onClick={handleLogOut}
          >
            Log Out
          </button>
          <br></br>
        </center>
        <div
          ref={componentRef}
          style={{ width: "100%", height: window.innerHeight }}
        >
          <center>
            <table className="table" style={{ border: "2px solid black" }}>
              <thead className="tblHeader" style={{ backgroundColor: "black" }}>
                <tr>
                  <th scope="col" style={{ color: "white" }}>
                    Customer Name
                  </th>
                  <th scope="col" style={{ color: "white" }}>
                    Product Name
                  </th>
                  <th scope="col" style={{ color: "white" }}>
                    Quantity
                  </th>
                  <th scope="col" style={{ color: "white" }}>
                    Order Date
                  </th>
                  <th scope="col" style={{ color: "white" }}>
                    Status
                  </th>
                </tr>
              </thead>
              {adm.map((data) => {
                return (
                  <tbody>
                    <tr>
                      <td>{data.CustomerName}</td>
                      <td>{data.ProductName}</td>
                      <td>{data.quantity}</td>
                      <td>{data.orderDate}</td>
                      <td>
                        <select
                          value={data.status}
                          onChange={(e) =>
                            Axios.put(
                              `http://localhost:8070/order/update/${data._id}`,
                              { status: e.target.value }
                            ).then((resp) => {
                              console.log(resp);
                              setadm((prevState) =>
                                prevState.map((o) => {
                                  if (o._id === data._id) {
                                    return { ...o, status: e.target.value };
                                  }
                                  return o;
                                })
                              );
                            })
                          }
                          style={{
                            borderRadius: "5px",
                            padding: "5px",
                            border: "1px solid black",
                          }}
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </center>
        </div>
      </div>
    </section>
  );
}
