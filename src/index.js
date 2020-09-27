import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import MainPicProvider from './provider/main-pic-provider/main-pic-provider.component';
import CartProvider from './provider/cart-provider/cart-provider';
import SelectProvider from './provider/select-provider/select-provider';
import Loader from './component/loader/loader.component';

import './index.css';

const App = lazy(() => import ('./App'));

ReactDOM.render(
  <SelectProvider>
    <CartProvider>
      <MainPicProvider>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <App />
          </Suspense>
        </BrowserRouter>
      </MainPicProvider>
    </CartProvider>
  </SelectProvider>,
    document.getElementById('root')
);