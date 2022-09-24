import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/page/Home";
import Login from "./components/page/Login";
import Registration from "./components/page/Registration";
import Product from "./components/page/Product";
import Cart from "./components/page/Cart";
import Shipping from "./components/page/Shipping";
import Order from "./components/page/Order";
import Payment from "./components/page/Payment";

import Adminbar from "./components/admin/Adminbar";
import ProductsList from "./components/admin/ProductsList";
import AddProduct from "./components/admin/AddProduct";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/shipping" exact element={<Shipping />} />
          <Route path="/order" exact element={<Order />} />
          <Route path="/payment" exact element={<Payment />} />
          
          <Route path="/registration" exact element={<Registration />} />
          <Route path="/product/:id" exact element={<Product />} />
          <Route path="/product/name/:name" exact element={<Home />} />
          <Route path="/product/category/:cid" exact element={<Home />} />
          <Route path="/shopping/cart" exact element={<Cart />} />
          
          {/* Admin section */}
          <Route path="/admin" exact element={<Adminbar />} />
          <Route path="/admin/products" exact element={<ProductsList />} />
          <Route path="/product/admin/add" exact element={<AddProduct />} />


        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
