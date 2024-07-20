import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductComponent from "./components/ProductComponent ";
// import OrderComponent from "./components/OrderComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ViewProduct from "./components/ViewProduct";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<ProductComponent />} />
          <Route exact path="/addProduct" element={<AddProduct />} />
          <Route exact path="/edit/:id" element={<EditProduct />} />
           <Route exact path="/view/:id" element={<ViewProduct />} />
          
          {/* <Route path="/orders" element={<OrderComponent />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
