//import React, { useState } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import './App.css';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Order } from './pages/Order';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="product-detail" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
