import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//product rate
import AddProductRate from "./components/AddProductRate";
import ProductRate from "./components/ProductRates";

//filtered rates
import Product2FilteredRateProduct2FilteredRate from "./components/Product2FilteredRate";

import AddSellerRate from "./components/AddSellerRate";
import SellerFilteredRate from "./components/SellerFilteredRate";

//admin
import AdminSignup from "./components/AdminSignup";
import AdminSignin from "./components/AdminSignin";
import AdminPage from "./components/AdminPage";

import CustomerLogin from "./components/CustomerLogin";
import CustomerSignup from "./components/CustomerSignup";
import CustomerProfile from "./components/CustomerProfile";
import SellerProfile from "./components/SellerProfile";

import ViewProduct from "./components/ViewProduct";
import ClientProduct from "./components/ClientProduct";
import SingleProduct from "./components/SingleProduct";
import UpdateProduct from "./components/UpdateProduct";
import SellerLogin from "./components/SellerLogin";
import SellerSignup from "./components/SellerSignup";

import BackDrop from './components/BackDrop';
import CartItem from './components/CartItem';
import CartPage from './components/CartPage'
import ConfirmPurchase from './components/ConfirmPurchase';
import EmailSend from './components/EmailSend';
import NavBar from './components/NavBar';
import PayDeliver from './components/PayDeliver';
import SideDrawer from './components/SideDrawer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/addproductRate" element={<AddProductRate />}></Route>
        <Route path="/ProductRates" element={<ProductRate />}></Route>

        <Route
          path="/product2rates"
          element={<Product2FilteredRateProduct2FilteredRate />}
        ></Route>

        <Route path="/addSellerRate" element={<AddSellerRate />}></Route>

        <Route path="/sellerRate" element={<SellerFilteredRate />}></Route>

        <Route path="/adminSignup" element={<AdminSignup />}></Route>
        <Route path="/adminLogin" element={<AdminSignin />}></Route>
        <Route path="/adminPage" element={<AdminPage />}></Route>

        <Route path="/viewP" element={<ViewProduct />}></Route>
        <Route path="/clientP" element={<ClientProduct />}></Route>
        <Route path="/singleP" element={<SingleProduct />}></Route>
        <Route path="/updateP" element={<UpdateProduct />}></Route>

        <Route path="/login" element={<CustomerLogin />}></Route>
        <Route path="/signup" element={<CustomerSignup />}></Route>
        <Route path="/cusprofile" element={<CustomerProfile />}></Route>
        <Route path="/selprofile" element={<SellerProfile />}></Route>

        <Route path="/slogin" element={<SellerLogin />}></Route>
        <Route path="/ssignup" element={<SellerSignup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
