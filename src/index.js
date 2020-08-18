import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import MainPicProvider from './provider/main-pic-provider/main-pic-provider.component';
import CartProvider from './provider/cart-provider/cart-provider';
import SelectProvider from './provider/select-provider/select-provider';

import './index.css';
import App from './App';

ReactDOM.render(
  <SelectProvider>
    <CartProvider>
      <MainPicProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MainPicProvider>
    </CartProvider>
  </SelectProvider>,
    document.getElementById('root')
);