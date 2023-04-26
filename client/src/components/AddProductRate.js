import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import "../css/AddProductRate.css";
import Product2FilteredRateProduct2FilteredRate from "../components/Product2FilteredRate";

export default function AddProductRate() {
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState("");
  const [productName, setProductName] = useState("");
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");

  function handleRating(value) {
    setRating(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newProductRate = {
      customerName: customerName,
      productName: "product-2",
      rate: rating,
      comment: comment,
    };
    //send http request
    axios
      .post("http://localhost:8070/productRate/addProductRate", newProductRate)
      .then((resp) => {
        setCustomerName("");
        setProductName("");
        setRating(null);
        setComment("");
        window.location.reload(); // Refresh the page
      });
  }

  return (
    <div className="form-container">
      <br></br>
      <div className="form-box">
        <form class="form-review" onSubmit={handleSubmit}>
          <div class="row">
            <div class="col">
              <div class="form-group form-inline">
                <label for="nameInput">
                  <b>Name</b>
                </label>
                <input
                  type="text"
                  class="form-control input-field"
                  id="nameInput"
                  placeholder="Enter your name"
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                  }}
                ></input>
              </div>
            </div>

            {/* rate by stars */}
            <div class="col">
              <div class="form-group form-inline">
                <label for="rateInput">
                  <b>Rate</b>
                </label>
                <div className="stars-container">
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                      <label key={i}>
                        <input
                          type="radio"
                          name="rating"
                          value={ratingValue}
                          onClick={() => handleRating(ratingValue)}
                        />
                        <FaStar
                          className="star"
                          color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                          size={25}
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <br />
          <div class="form-group">
            <label for="exampleFormControlTextarea1">
              <b>Add Review</b>
            </label>
            <br />
            <textarea
              class="form-control input-field"
              placeholder="Add your comment here.."
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></textarea>
            <br />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button type="submit" class="btn btn-dark">
                ADD
              </button>
            </div>
          </div>
          <br />
        </form>
      </div>
      <Product2FilteredRateProduct2FilteredRate />
    </div>
  );
}
