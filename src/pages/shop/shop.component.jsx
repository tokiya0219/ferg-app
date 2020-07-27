import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../component/collection-overview/collection-overview.component';
// import CollectionPage from '../collection/collection.component';
import CollectionItem from '../../component/collection-item/collection-item.component';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionItem} />
    </div>
  );
  
  export default ShopPage;