import MrBigStuff from './assets/big-stuff.jpg';
import BullsEye from './assets/bulls-eye.jpg';
import BIGAL from './assets/BIGAL.jpg';
import COD from './assets/COD.jpg';
import Ferg from './assets/ferg-burger.jpg';
import FergCheese from './assets/fergcheese.jpg';
import Fries from './assets/fries.jpg';
import Lafel from './assets/lafel.jpg';
import Onion from './assets/onion.jpg';
import Southern from './assets/southern.jpg';
import Squid from './assets/squid.jpg';
import Tofu from './assets/tofu.jpg';
import Tropi from './assets/tropical.jpg';
import Wiggum from './assets/wigum.jpg';

const SHOP_DATA = [
    {
        id: 1,
        title: 'Burgers',
        linkUrl: 'burgers',
        key:'burgers',
        items: [
        {
            id: 1,
            name: 'Fergburger',
            key: 'ferg',
            imageUrl: Ferg,
            price: 11.90
        },
        {
            id: 2,
            name: 'Fergburger + select of cheese',
            key:'withCheese',
            imageUrl: FergCheese,
            price: 12.90
        },
        {
            id: 3,
            name: 'Big AL',
            key: 'AL',
            imageUrl: BIGAL,
            price: 18.50
        },
        {
            id: 4,
            name: 'Mr. Big stuff',
            key: 'Mr',
            imageUrl: MrBigStuff,
            price: 16.90
        },
        {
            id:5,
            name: 'Tropical swine',
            key: 'TS',
            imageUrl: Tropi,
            price: 14.90
        },
        {
            id:6,
            name: 'Southern swine',
            key: 'SS',
            imageUrl: Southern,
            price: 13.90
        },
        {
            id:7,
            name: "Bull's Eye",
            key: 'BE',
            imageUrl: BullsEye,
            price: 18.90
        },
        {
            id:8,
            name: 'Chief Wiggum',
            key: 'CW',
            imageUrl: Wiggum,
            price: 14.90
        },
        {
            id:9,
            name: 'The Codfather',
            key: 'COD',
            imageUrl: COD,
            price: 14.90
        },
        {
            id:10,
            name: 'Holier Than Thou',
            key: 'Tofu',
            imageUrl: Tofu,
            price: 12.90
        },
        {
            id:11,
            name: 'Ferg-lafel',
            key: 'Lafel',
            imageUrl: Lafel,
            price: 12.90
        }
        ]
    },
        {
        id: 2,
        title: 'Sides',
        linkUrl: 'sides',
        key:'sides',
        items: [
            {
                id: 12,
                name: 'Fries + Choise of source',
                key: 'fries',
                imageUrl: Fries,
                price: 4.50
            },
            {
                id:13,
                name: 'Onion rings',
                key: 'Onion',
                imageUrl: Onion,
                price: 7.50
            },
            {
                id: 14,
                name: 'salt and pepper squid',
                key: 'Squid',
                imageUrl: Squid,
                price: 9.50
            }
        ]
    }
]

export default SHOP_DATA;