import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLoading } from './components/loader/MainLoading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';

const NoPage = lazy(() => import("./components/NoPage"));
const Checkout = lazy(() => import("./components/cart/Checkout"));
const Success = lazy(() => import("./components/Success"));
const Home = lazy(() => import("./components/Home"));
const Cart = lazy(() => import("./components/cart/Cart"));
const Orders = lazy(() => import("./components/Orders"));
const ShippingPage = lazy(() => import("./components/ShippingPage"));


const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Suspense fallback={<MainLoading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/checkoutPage" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
