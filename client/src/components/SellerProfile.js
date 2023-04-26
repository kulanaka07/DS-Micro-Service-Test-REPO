import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/cusProfile.css";
axios.defaults.withCredentials = true;
// let firstRender = true;

export default function SellerProfile() {
  const navigate = useNavigate();

  const [seller, setSeller] = useState();

  const [SellerName, setSellerName] = useState("");
  const [SellerEmail, setSellerEmail] = useState("");
  const [SellerUsername, setSellerUsername] = useState("");

  useEffect(() => {
    const sendRequest = async () => {
      const res = await axios.get("http://localhost:8050/seller/sel");
      const data = res.data.seller;
      setSeller(data);
      setSellerName(data.SellerName);
      setSellerEmail(data.SellerEmail);
      setSellerUsername(data.SellerUsername);
    };

    sendRequest();
  }, []);

  const sendDataToUpdate = async (e) => {
    e.preventDefault();

    const data = {
      SellerName: SellerName,
      SellerEmail: SellerEmail,
      SellerUsername: SellerUsername,
    };

    await axios
      .put(`http://localhost:8050/seller/update/${seller._id}`, data, {
        withCredentials: true,
      })
      .then(() => {
        // alert("Profile Updated");
        navigate("/signup");
      })
      .catch((err) => {
        alert(err);
      });

    setSeller({ ...seller, ...data });
  };

  const onDelete = (_id) => {
    axios
      .delete(`http://localhost:8050/seller/delete/${seller._id}`)
      .then(() => {
        alert("Profile Deleted");
      })
      .catch((err) => {
        alert(err);
      });
  };

  if (!seller) {
    return <div>Loading...</div>;
  }

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
            <span className="login100-form-title"> Seller Profile</span>

            <div className="profileParent">
              <div className="floatchildseller">
                <div className="leftfloatseller">
                  <div className="m-t-20 m-b-60">Name: </div>
                  <div className="m-b-50">Email: </div>
                  <div className="m-b-58">Username: </div>
                </div>
              </div>

              <div className="floatchildseller">
                <div className="rightfloatseller">
                  <div className="alignLine m-b-20">
                    <input
                      className="input200 m-l-16"
                      type="text"
                      value={SellerName}
                      name="SellerName"
                      onChange={(e) => {
                        setSellerName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="alignLine m-b-20">
                    <input
                      className="input200 m-l-16"
                      type="text"
                      value={SellerEmail}
                      name="SellerEmail"
                      onChange={(e) => {
                        setSellerEmail(e.target.value);
                      }}
                    />
                  </div>

                  <div className="alignLine m-b-20">
                    <input
                      className="input200 m-l-16"
                      type="text"
                      value={SellerUsername}
                      name="SellerUsername"
                      onChange={(e) => {
                        setSellerUsername(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              className="login100-form-btn m-b-16 m-t-16"
              type="submit"
              onClick={sendDataToUpdate}
            >
              Save and Update
            </button>

            <button
              className="login100-form-btn m-b-16 m-t-16"
              onClick={() => {
                onDelete(seller._id);
              }}
            >
              Delete Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
