// dependency
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, Link, Redirect, Switch, BrowserRouter } from 'react-router-dom';
// css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './asset/common/Style.css'
import './asset/home/home.css'
// components
import Home from './components/page/Home';
import Navbar_ from './components/common/Navbar_'
import Footer from './components/common/Footer'
import ErrPage from "./components/common/ErrPage";
import Register from './components/login/Registration'
import Admin from './components/admin/Admin'


const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(

  <BrowserRouter>



    <div className="container-fluid">
        <Navbar_></Navbar_>
          <Routes>
            <Route path="/" >
              <Route index element={<Home />} />
              <Route path="login" element={<Home />}/>
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="admin" element={<Admin />} />
            <Route path="*" element={<ErrPage />} />
          </Routes>
        <Footer></Footer>

      
    </div>


  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
