import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/page/Home";
import Login from "./components/page/Login";
import Registration from "./components/page/Registration";
import Product from "./components/page/Product";
import Cart from "./components/page/Cart";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/registration" exact element={<Registration />} />
          <Route path="/product/:id" exact element={<Product />} />
          <Route path="/product/name/:name" exact element={<Home />} />
          <Route path="/product/category/:cid" exact element={<Home />} />
          <Route path="/shopping/cart" exact element={<Cart />} />
          <Route path="/admin" exact element={<Admin />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
