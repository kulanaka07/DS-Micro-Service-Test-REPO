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

// import CustomerLogin from "./components/CustomerLogin";
// import CustomerSignup from "./components/CustomerSignup";
// import SellerLogin from "./components/SellerLogin";
// import SellerSignup from "./components/SellerSignup";
// import CustomerProfile from "./components/CustomerProfile";
// import SellerProfile from "./components/SellerProfile";
// import EmailSend from "./components/EmailSend";

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

        {/* <Route path="/login" element={<CustomerLogin />}></Route>
        <Route path="/signup" element={<CustomerSignup />}></Route>
        <Route path="/cusprofile" element={<CustomerProfile />}></Route>
        <Route path="/selprofile" element={<SellerProfile />}></Route> */}

        {/* <Route path="/slogin" element={<SellerLogin />}></Route>
        <Route path="/ssignup" element={<SellerSignup />}></Route>
        <Route path="/email" element={<EmailSend />}></Route>
        <Route path="/slogin" element={<SellerLogin />}></Route>
        <Route path="/ssignup" element={<SellerSignup />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
