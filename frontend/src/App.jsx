
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/role 1 interface/HomePage";
import CartPage from "./components/role 1 interface/CartPage";
import FavPage from "./components/role 1 interface/FavPage";
import AccountPage from "./components/role 1 interface/AccountPage";
import RegisterPage from "./components/shared components/Register";
import NotFoundPage from "./components/shared components/404Page";
import CheckoutPage from "./components/role 1 interface/CheckoutPage";
import CategoryPage from "./components/role 1 interface/CategoryPage";
import ProductPage from "./components/role 1 interface/ProductPage";
import Navbar from "./components/shared components/Navbar";
import Login from "../src/components/shared components/Login";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
};


export default App;

