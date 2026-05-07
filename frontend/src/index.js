import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from './landing_pages/home/HomePage';
import Signup from "./landing_pages/signup/Signup";
import AboutPage from "./landing_pages/about/AboutPage";
import ProductPage from "./landing_pages/products/ProductsPage";
import SupportPage from './landing_pages/support/SupportPage';
import NotFound from './landing_pages/NotFound';
import PricingPage from "./landing_pages/pricing/PricingPage";
import Navbar from './landing_pages/Navbar';
import Footer from './landing_pages/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

