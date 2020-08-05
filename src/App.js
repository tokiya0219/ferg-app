import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Header from './component/header/header.component';

import './App.css';
import MenuPage from './pages/menu/menu.component';
import CollectionItem from './component/collection-item/collection-item.component';
import CheckOut from './pages/checkout/checkout.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/menu' component={MenuPage} />
        <Route path='/menu/:itemKey' component={CollectionItem} />
        <Route path='/checkout' component={CheckOut} />
      </Switch>
    </div>
  );
}

export default App;
