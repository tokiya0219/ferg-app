import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import MainPicProvider from './provider/main-pic-provider.component';

import './index.css';
import App from './App';

ReactDOM.render(
  <MainPicProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MainPicProvider>,
    document.getElementById('root')
);