import {createContext} from 'react';

import ITEM_DATA from './item.data';

const ItemsContext = createContext(ITEM_DATA);

export default ItemsContext