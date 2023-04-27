import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import CustomerLogin from "./components/CustomerLogin";
import CustomerSignup from "./components/CustomerSignup";

import SellerLogin from "./components/SellerLogin";
import SellerSignup from "./components/SellerSignup";
import CustomerProfile from "./components/CustomerProfile";
import SellerProfile from "./components/SellerProfile";





import AddProduct from "./components/AddProduct";
import ViewProduct from "./components/ViewProduct";
import UpdateProduct from "./components/UpdateProduct";
import ClientProduct from "./components/ClientProduct";
import SingleProduct from "./components/SingleProduct";



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


// cart and delivery
import CartPage from "./components/CartPage";
import NavBar from "./components/NavBar";
import BackDrop from "./components/BackDrop";
import SideDrawer from "./components/SideDrawer";
import PayDeliver from "./components/PayDeliver";
import ConfirmPurchase from "./components/ConfirmPurchase";


function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>

      <NavBar click={() => setSideToggle(true)} />
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      
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
        

        <Route path="/addP" element={<AddProduct/>}></Route>
        <Route path="/viewP" element={<ViewProduct/>}></Route>
        <Route path="/updateP" element={<UpdateProduct/>}></Route>
        <Route path="/clientP" element={<ClientProduct/>}></Route>
        <Route path="/singleP" element={<SingleProduct/>}></Route>

        

        <Route path="/addP" element={<AddProduct />}></Route>


        {/* Adding routes for cart and delivery payment components.*/}
        <Route exact path="/cart" element={<><CartPage/></>}></Route>
        <Route exact path="/cart/:id" element={<><CartPage/></>}></Route>
        <Route path="/pay" element={<PayDeliver />}></Route>
        <Route path="/confirmpay" element={<ConfirmPurchase />}></Route>
        <Route path="/singleP/:id" element={<ConfirmPurchase />}></Route>      
      </Routes>
    </Router>
  );
}

export default App;