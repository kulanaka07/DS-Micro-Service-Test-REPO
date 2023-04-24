import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//product rate
import AddProductRate from "./components/AddProductRate";
import ProductRate from "./components/ProductRates";

//filtered rates
import Product2FilteredRateProduct2FilteredRate from "./components/Product2FilteredRate";


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
       
      </Routes>
    </Router>
  );
}

export default App;
