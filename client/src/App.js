import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//product rate
import AddProductRate from "./components/AddProductRate";
import ProductRate from "./components/ProductRates";

//filtered rates
import Product2FilteredRateProduct2FilteredRate from "./components/Product2FilteredRate";

import AddSellerRate from "./components/AddSellerRate";
import SellerFilteredRate from "./components/SellerFilteredRate";

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
      </Routes>
    </Router>
  );
}

export default App;
