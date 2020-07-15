import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Header from './component/header/header.component';
import MenuPage from './pages/menu/menu.component';

import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/menu' component={MenuPage} />
      </Switch>
    </div>
  );
}

export default App;
