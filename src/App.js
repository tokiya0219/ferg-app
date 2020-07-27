import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Header from './component/header/header.component';
// import ShopPage from './pages/shop/shop.component';

import './App.css';
import CollectionOverview from './component/collection-overview/collection-overview.component';
import CollectionItem from './component/collection-item/collection-item.component';
// import CollectionPage from './pages/collection/collection.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/menu' component={CollectionOverview} />
        <Route path='/menu/:itemKey' component={CollectionItem} />
      </Switch>
    </div>
  );
}

export default App;
