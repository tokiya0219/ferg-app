import MrBigStuff from '../../assets/big-stuff.jpg';
import BullsEye from '../../assets/bulls-eye.jpg';
import BIGAL from '../../assets/BIGAL.jpg';
import COD from '../../assets/COD.jpg';
import Ferg from '../../assets/ferg-burger.jpg';
import FergCheese from '../../assets/fergcheese.jpg';
import Fries from '../../assets/fries.jpg';
import Lafel from '../../assets/lafel.jpg';
import Onion from '../../assets/onion.jpg';
import Southern from '../../assets/southern.jpg';
import Squid from '../../assets/squid.jpg';
import Tofu from '../../assets/tofu.jpg';
import Tropi from '../../assets/tropical.jpg';
import Wiggum from '../../assets/wigum.jpg';

const SHOP_DATA = [
    {
        id: 1,
        title: 'Burgers',
        linkUrl: 'burgers',
        key:'burgers',
        items: [
        {
            id: 1,
            name: 'The Fergburger',
            key: 'ferg',
            imageUrl: Ferg,
            price: 11.90,
            ingredient: 'Prime N.Z. beef, lettuce, tomato, red onion, aioli & tomato relish'
        },
        {
            id: 2,
            name: 'The Fergburger + select of cheese',
            key:'withCheese',
            imageUrl: FergCheese,
            price: 12.90,
            ingredient: 'Prime N.Z. beef, lettuce, tomato, red onion, aioli & tomato relish + your choice of cheese'
        },
        {
            id: 3,
            name: 'BIG AL',
            key: 'AL',
            imageUrl: BIGAL,
            price: 18.50,
            ingredient: 'Al delivers a double serving of Prime New Zealand beef(3/4lb), lashings of bacon, a whole lotta cheese, 2eggs, beetroot, lettuce, tomato, red onion, relish & a big wad of aioli.'
        },
        {
            id: 4,
            name: 'Mr. Big Stuff',
            key: 'Mr',
            imageUrl: MrBigStuff,
            price: 16.90,
            ingredient: '3/4lb of Prime N.Z. beef, Cheddar cheese, streaky bacon, BBQ souse, lettuce, tomato, red onions & aioli'
        },
        {
            id:5,
            name: 'Tropical Swine',
            key: 'TS',
            imageUrl: Tropi,
            price: 14.90,
            ingredient: 'Prime N.Z. beef, streaky bacon, Cheddar cheese, grilled pineapple, lettuce, tomato, red onion, aioli & tomato relish'
        },
        {
            id:6,
            name: 'Southern Swine',
            key: 'SS',
            imageUrl: Southern,
            price: 13.90,
            ingredient: 'Prime N.Z. beef, streaky bacon, avocado, lettuce, tomato, red onion, aioli & tomato relish'
        },
        {
            id:7,
            name: "The Bullseye",
            key: 'BE',
            imageUrl: BullsEye,
            price: 18.90,
            ingredient: 'Prime N.Z. Ribeye steak(200gm) grilled middium, topped with grilled caramelised white onion, your choice of cheese, lettuce, tomato, aioli & tomato relish'
        },
        {
            id:8,
            name: 'Chief Wiggum',
            key: 'CW',
            imageUrl: Wiggum,
            price: 14.90,
            ingredient: 'Slow roasted pork belly, lettuce, tomato, red onion, hash brown, aioli & apricot seeded mustard'
        },
        {
            id:9,
            name: 'The Codfather',
            key: 'COD',
            imageUrl: COD,
            price: 14.90,
            ingredient: "South Coast Blue Cod, tempura batter, Ferg's dill tartare, lettuce, tomato, aioli & tomato relish"
        },
        {
            id:10,
            name: 'Holier Than Thou',
            key: 'Tofu',
            imageUrl: Tofu,
            price: 12.90,
            ingredient: 'Tempura tofu, spicy satay, coconut & coriander sauce, lettuce, tomato, red onion, cucumber, avocado, snowpea shoots & aioli'
        },
        {
            id:11,
            name: 'Ferg-lafel',
            key: 'Lafel',
            imageUrl: Lafel,
            price: 12.90,
            ingredient: 'Falafel patties dressed with lemon yoghurt & chipotle chilli sauce, lettuce, tomato, red onion, cucumber, avocado & aioli'
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
                price: 4.50,
                ingredient: 'aioli, wasabi mayonnaise, tomato sauce, BBQ or sweet chilli'
            },
            {
                id:13,
                name: 'Onion rings',
                key: 'Onion',
                imageUrl: Onion,
                price: 7.50,
                ingredient: 'with aioli'
            },
            {
                id: 14,
                name: 'salt and pepper squid',
                key: 'Squid',
                imageUrl: Squid,
                price: 9.50,
                ingredient: 'with wasabi mayonnaise'
            }
        ]
    }
]

export default SHOP_DATA;