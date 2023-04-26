import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";






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

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      
      <Routes>
     

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
       

        

        <Route path="/addP" element={<AddProduct/>}></Route>
        <Route path="/viewP" element={<ViewProduct/>}></Route>
        <Route path="/updateP" element={<UpdateProduct/>}></Route>
        <Route path="/clientP" element={<ClientProduct/>}></Route>
        <Route path="/singleP" element={<SingleProduct/>}></Route>

        

        <Route path="/addP" element={<AddProduct />}></Route>

  

      
      </Routes>
    </Router>
  );
}

export default App;