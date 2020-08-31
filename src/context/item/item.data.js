import MrBigStuff from '../../assets/big-stuff.jpg';
import BullsEye from '../../assets/bulls-eye.jpg';
import BIGAL from '../../assets/BIGAL.jpg';
import COD from '../../assets/COD.jpg';
import Ferg from '../../assets/ferg-burger.jpg';
import Fries from '../../assets/fries.jpg';
import Lafel from '../../assets/lafel.jpg';
import Onion from '../../assets/onion.jpg';
import Southern from '../../assets/southern.jpg';
import Squid from '../../assets/squid.jpg';
import Tofu from '../../assets/tofu.jpg';
import Tropi from '../../assets/tropical.jpg';
import Wiggum from '../../assets/wigum.jpg';

const ITEM_DATA ={
        ferg:
        {
            id: 1,
            name: 'The Fergburger',
            key: 'ferg',
            imageUrl: Ferg,
            price: 11.90,
            ingredient: 'Prime N.Z. beef, lettuce, tomato, red onion, aioli & tomato relish',
            ableToCustomCheese: [
                'No Cheese',
                'Cheddar',
                'Blue',
                'Brie',
                'Swiss',
            ],
            ableToCustomSauce: [
                'Default',
                'Tomato Relish',
                'Aioli',
                'BBQ',
                'Mango',
                'Raita',
                'Sweet Chili',
                'Mastard',
                'Tomato Sauce',
                'Tartar',
                'Taragon',
                'No Sauce'
            ],
            optionSauce:[],
            optionCheese:[]
        },
        AL:
        {
            id: 2,
            name: 'BIG AL',
            key: 'AL',
            imageUrl: BIGAL,
            price: 18.50,
            ingredient: 'Al delivers a double serving of Prime New Zealand beef(3/4lb), lashings of bacon, a whole lotta cheese, 2eggs, beetroot, lettuce, tomato, red onion, relish & a big wad of aioli.',
            ableToCustomCheese: [
                'No Cheese',
                'Cheddar',
                'Blue',
                'Brie',
                'Swiss',
            ],
            ableToCustomSauce: [
                'Default',
                'Tomato Relish',
                'Aioli',
                'BBQ',
                'Mango',
                'Raita',
                'Sweet Chili',
                'Mastard',
                'Tomato Sauce',
                'Tartar',
                'Taragon',
                'No Sauce'
            ],
            optionCheese:[],
            optionSauce:[],
        },
        Mr:
        {
            id: 3,
            name: 'Mr. Big Stuff',
            key: 'Mr',
            imageUrl: MrBigStuff,
            price: 16.90,
            ingredient: '3/4lb of Prime N.Z. beef, Cheddar cheese, streaky bacon, BBQ souse, lettuce, tomato, red onions & aioli',
            ableToCustomCheese: [
                'No Cheese',
                'Cheddar',
                'Blue',
                'Brie',
                'Swiss',
            ],
            ableToCustomSauce: [
                'Default',
                'Tomato Relish',
                'Aioli',
                'BBQ',
                'Mango',
                'Raita',
                'Sweet Chili',
                'Mastard',
                'Tomato Sauce',
                'Tartar',
                'Taragon',
                'No Sauce'
            ],
            optionCheese:[],
            optionSauce:[],
        },
        TS:
        {
            id:4,
            name: 'Tropical Swine',
            key: 'TS',
            imageUrl: Tropi,
            price: 14.90,
            ingredient: 'Prime N.Z. beef, streaky bacon, Cheddar cheese, grilled pineapple, lettuce, tomato, red onion, aioli & tomato relish',
            ableToCustomCheese: [
                'No Cheese',
                'Cheddar',
                'Blue',
                'Brie',
                'Swiss',
            ],
            ableToCustomSauce: [
                'Default',
                'Tomato Relish',
                'Aioli',
                'BBQ',
                'Mango',
                'Raita',
                'Sweet Chili',
                'Mastard',
                'Tomato Sauce',
                'Tartar',
                'Taragon',
                'No Sauce'
            ],
            optionCheese:[],
            optionSauce:[],
        },
        SS:
        {
            id:5,
            name: 'Southern Swine',
            key: 'SS',
            imageUrl: Southern,
            price: 13.90,
            ingredient: 'Prime N.Z. beef, streaky bacon, avocado, lettuce, tomato, red onion, aioli & tomato relish',
            ableToCustomCheese: [
                'No Cheese',
                'Cheddar',
                'Blue',
                'Brie',
                'Swiss',
            ],
            ableToCustomSauce: [
                'Default',
                'Tomato Relish',
                'Aioli',
                'BBQ',
                'Mango',
                'Raita',
                'Sweet Chili',
                'Mastard',
                'Tomato Sauce',
                'Tartar',
                'Taragon',
                'No Sauce'
            ],
            optionCheese:[],
            optionSauce:[],
        },
        BE:
        {
            id:6,
            name: "The Bullseye",
            key: 'BE',
            imageUrl: BullsEye,
            price: 18.90,
            ingredient: 'Prime N.Z. Ribeye steak(200gm) grilled middium, topped with grilled caramelised white onion, your choice of cheese, lettuce, tomato, aioli & tomato relish',
            ableToCustomCheese: [
                'No Cheese',
                'Cheddar',
                'Blue',
                'Brie',
                'Swiss',
            ],
            ableToCustomSauce: [
                'Default',
                'Tomato Relish',
                'Aioli',
                'BBQ',
                'Mango',
                'Raita',
                'Sweet Chili',
                'Mastard',
                'Tomato Sauce',
                'Tartar',
                'Taragon',
                'No Sauce'
            ],
            optionCheese:[],
            optionSauce:[],
        },
        CW:
        {
            id:7,
            name: 'Chief Wiggum',
            key: 'CW',
            imageUrl: Wiggum,
            price: 14.90,
            ingredient: 'Slow roasted pork belly, lettuce, tomato, red onion, hash brown, aioli & apricot seeded mustard',
            ableToCustomCheese: [
                'No Cheese',
                'Cheddar',
                'Blue',
                'Brie',
                'Swiss',
            ],
            ableToCustomSauce: [
                'Default',
                'Tomato Relish',
                'Aioli',
                'BBQ',
                'Mango',
                'Raita',
                'Sweet Chili',
                'Mastard',
                'Tomato Sauce',
                'Tartar',
                'Taragon',
                'No Sauce'
            ],
            optionCheese:[],
            optionSauce:[],
        },
        COD:
        {
            id:8,
            name: 'The Codfather',
            key: 'COD',
            imageUrl: COD,
            price: 14.90,
            ingredient: "South Coast Blue Cod, tempura batter, Ferg's dill tartare, lettuce, tomato, aioli & tomato relish",
            ableToCustomCheese: [
                'No Cheese',
                'Cheddar',
                'Blue',
                'Brie',
                'Swiss',
            ],
            ableToCustomSauce: [
                'Default',
                'Tomato Relish',
                'Aioli',
                'BBQ',
                'Mango',
                'Raita',
                'Sweet Chili',
                'Mastard',
                'Tomato Sauce',
                'Tartar',
                'Taragon',
                'No Sauce'
            ],
            optionCheese:[],
            optionSauce:[],
        },
        Tofu:
        {
            id:9,
            name: 'Holier Than Thou',
            key: 'Tofu',
            imageUrl: Tofu,
            price: 12.90,
            ingredient: 'Tempura tofu, spicy satay, coconut & coriander sauce, lettuce, tomato, red onion, cucumber, avocado, snowpea shoots & aioli',
            ableToCustomCheese: [
                'No Cheese',
                'Cheddar',
                'Blue',
                'Brie',
                'Swiss',
            ],
            ableToCustomSauce: [
                'Default',
                'Tomato Relish',
                'Aioli',
                'BBQ',
                'Mango',
                'Raita',
                'Sweet Chili',
                'Mastard',
                'Tomato Sauce',
                'Tartar',
                'Taragon',
                'No Sauce'
            ],
            optionCheese:[],
            optionSauce:[],
        },
        Lafel:
        {
            id:10,
            name: 'Ferg-lafel',
            key: 'Lafel',
            imageUrl: Lafel,
            price: 12.90,
            ingredient: 'Falafel patties dressed with lemon yoghurt & chipotle chilli sauce, lettuce, tomato, red onion, cucumber, avocado & aioli',
            ableToCustomCheese: [
                'No Cheese',
                'Cheddar',
                'Blue',
                'Brie',
                'Swiss',
            ],
            ableToCustomSauce: [
                'Default',
                'Tomato Relish',
                'Aioli',
                'BBQ',
                'Mango',
                'Raita',
                'Sweet Chili',
                'Mastard',
                'Tomato Sauce',
                'Tartar',
                'Taragon',
                'No Sauce'
            ],
            optionCheese:[],
            optionSauce:[],
        },
        fries:
        {
                id: 11,
                name: 'Fries + Choise of source',
                key: 'fries',
                imageUrl: Fries,
                price: 4.50,
                ingredient: 'aioli, wasabi mayonnaise, tomato sauce, BBQ or sweet chilli',
                ableToCustomFriesSauce: [
                    'Tomato Sauce',
                    'Aioli',
                    'Wasabi Mayonnaise',
                    'Sweet Chili',
                    'BBQ',
                    'No-Sauce',
                ],
                optionSauce:[],
        },
        Onion:
        {
            id:12,
            name: 'Onion rings',
            key: 'Onion',
            imageUrl: Onion,
            price: 7.50,
            ingredient: 'with aioli',
        },
        Squid:
        {
            id: 13,
            name: 'salt and pepper squid',
            key: 'Squid',
            imageUrl: Squid,
            price: 9.50,
            ingredient: 'with wasabi mayonnaise'
        }
    }

export default ITEM_DATA;