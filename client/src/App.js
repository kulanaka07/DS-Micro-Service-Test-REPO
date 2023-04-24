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
      </Routes>
    </Router>
  );
}

export default App;
