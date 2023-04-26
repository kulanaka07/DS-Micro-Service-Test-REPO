import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import CustomerLogin from "./components/CustomerLogin";
import CustomerSignup from "./components/CustomerSignup";

import SellerLogin from "./components/SellerLogin";
import SellerSignup from "./components/SellerSignup";
import CustomerProfile from "./components/CustomerProfile";
import SellerProfile from "./components/SellerProfile";

//admin
import AdminSignup from "./components/AdminSignup";
import AdminSignin from "./components/AdminSignin";
import AdminPage from "./components/AdminPage";

//product rate
import AddProductRate from "./components/AddProductRate";
import ProductRate from "./components/ProductRates";

//filtered rates
import Product2FilteredRateProduct2FilteredRate from "./components/Product2FilteredRate";
import SellerFilteredRate from "./components/SellerFilteredRate";

//seller rate
import AddSellerRate from "./components/AddSellerRate";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<CustomerLogin />}></Route>
        <Route path="/signup" element={<CustomerSignup />}></Route>

        <Route path="/slogin" element={<SellerLogin />}></Route>
        <Route path="/ssignup" element={<SellerSignup />}></Route>

        <Route path="/adminSignup" element={<AdminSignup />}></Route>
        <Route path="/adminLogin" element={<AdminSignin />}></Route>
        <Route path="/adminPage" element={<AdminPage />}></Route>

        <Route path="/addproductRate" element={<AddProductRate />}></Route>
        <Route path="/ProductRates" element={<ProductRate />}></Route>

        <Route path="/addSellerRate" element={<AddSellerRate />}></Route>

        <Route
          path="/product2rates"
          element={<Product2FilteredRateProduct2FilteredRate />}
        ></Route>
        <Route path="/sellerRate" element={<SellerFilteredRate />}></Route>

        <Route path="/cusprofile" element={<CustomerProfile />}></Route>
        <Route path="/selprofile" element={<SellerProfile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
