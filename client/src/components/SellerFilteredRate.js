import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios";
import "../css/form.css";
import "../css/star.css";

// import the user icon image
import userIcon from "../images/user.png";

import "../css/userIcon.css";

export default function SellerFilteredRate() {
  const navigate = useNavigate();
  const componentRef = useRef();
  const [rt, setRt] = useState([]);
  let [rate, setRate] = useState("");
  let [meanValue, setMeanValue] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:8070/sellerRate/sellerRates").then(
      (getData) => {
        const filteredData = getData.data.filter(
          (data) => data.sellerName === "seller 3"
        );
        setRt(filteredData);
      }
    );
  }, []);

  useEffect(() => {
    if (rt.length > 0) {
      const sum = rt.reduce((acc, data) => acc + data.rate, 0);
      const mean = sum / rt.length;
      setMeanValue(mean);
    }
  }, [rt]);

  function getStars(rating) {
    const filledStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(5 - rating);
    return filledStars + emptyStars;
  }

  return (
    <section className="ftco-section">
      <div className="container">
        <br />
        <br />
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
              {meanValue && (
                <div>
                  <h5>
                    Rate for the seller :{" "}
                    <div>{getStars(Math.round(meanValue))}</div>
                    <div>{meanValue.toFixed(2)}</div>
                  </h5>
                </div>
              )}
              <br></br>
              {rt.map((data) => (
                <div className="form-wrapper">
                  <form className="">
                    <div className="row">
                      <div className="col">
                        <div
                          className="form-group form-inline"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <img
                            src={userIcon}
                            alt="User Icon"
                            className="user-icon"
                            style={{ marginRight: "0.5em" }}
                          />{" "}
                          <strong className="name-cus">
                            {data.customerName}
                          </strong>
                        </div>
                      </div>
                      <div className="col">
                        <div className="col">
                          <div className="form-group form-inline">
                            <div className="stars filled">
                              {getStars(data.rate)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control form-control-new backColor name-cus"
                        placeholder="Add your comment here.."
                        id="exampleFormControlTextarea1"
                        value={data.comment}
                        readOnly
                        style={{ resize: "none" }}
                      />
                      <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      ></div>
                    </div>{" "}
                    <br />
                  </form>
                </div>
              ))}
              <br></br>
            </div>
          </center>
        </div>
      </div>
    </section>
  );
}