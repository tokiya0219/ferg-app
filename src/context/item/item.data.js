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
                {
                    label: 'Cheddar',
                    value: 'Cheddar'
                },
                {
                    label: 'Blue',
                    value: 'Blue'
                },
                {
                    label: 'Brie',
                    value: 'Brie'
                },
                {
                    label: 'Swiss',
                    value: 'Swiss'
                },
                {
                    label: 'no cheese',
                    value: 'no cheese'
                }
            ],
            ableToCustomSauce: [
                {
                    label: 'Tomato relish',
                    value: 'Tomato relish'
                },
                {
                    label: 'Aioli',
                    value: 'Aioli'
                },
                {
                    label: 'BBQ',
                    value: 'BBQ'
                },
                {
                    label: 'Mango',
                    value: 'Mango'
                },
                {
                    label: 'Raita',
                    value: 'Raita'
                },
                {
                    label: 'Sweet chili',
                    value: 'Sweet chili'
                },
                {
                    label: 'Mastard',
                    value: 'Mastard'
                },
                {
                    label: 'Tomato sauce',
                    value: 'Tomato sauce'
                },
                {
                    label: 'Tartar',
                    value: 'Tartar'
                },
                {
                    label: 'Taragon',
                    value: 'Taragon'
                },
                {
                    label: 'no-sauce',
                    value: 'no-sauce'
                }
            ],
        },
        withCheese:
        {
            id: 2,
            name: 'The Fergburger + select of cheese',
            key:'withCheese',
            imageUrl: FergCheese,
            price: 12.90,
            ingredient: 'Prime N.Z. beef, lettuce, tomato, red onion, aioli & tomato relish + your choice of cheese',
            ableToCustomCheese: [
                {
                    label: 'Cheddar',
                    value: 'Cheddar'
                },
                {
                    label: 'Blue',
                    value: 'Blue'
                },
                {
                    label: 'Brie',
                    value: 'Brie'
                },
                {
                    label: 'Swiss',
                    value: 'Swiss'
                },
                {
                    label: 'no cheese',
                    value: 'no cheese'
                }
            ],
            ableToCustomSauce: [
                {
                label: 'Tomato relish',
                value: 'Tomato relish'
                },
                {
                    label: 'Aioli',
                    value: 'Aioli'
                },
                {
                    label: 'BBQ',
                    value: 'BBQ'
                },
                {
                    label: 'Mango',
                    value: 'Mango'
                },
                {
                    label: 'Raita',
                    value: 'Raita'
                },
                {
                    label: 'Sweet chili',
                    value: 'Sweet chili'
                },
                {
                    label: 'Mastard',
                    value: 'Mastard'
                },
                {
                    label: 'Tomato sauce',
                    value: 'Tomato sauce'
                },
                {
                    label: 'Tartar',
                    value: 'Tartar'
                },
                {
                    label: 'Taragon',
                    value: 'Taragon'
                },
                {
                    label: 'no-sauce',
                    value: 'no-sauce'
                }
            ],
        },
        AL:
        {
            id: 3,
            name: 'BIG AL',
            key: 'AL',
            imageUrl: BIGAL,
            price: 18.50,
            ingredient: 'Al delivers a double serving of Prime New Zealand beef(3/4lb), lashings of bacon, a whole lotta cheese, 2eggs, beetroot, lettuce, tomato, red onion, relish & a big wad of aioli.',
            ableToCustomCheese: [
                {
                    label: 'Cheddar',
                    value: 'Cheddar'
                },
                {
                    label: 'Blue',
                    value: 'Blue'
                },
                {
                    label: 'Brie',
                    value: 'Brie'
                },
                {
                    label: 'Swiss',
                    value: 'Swiss'
                },
                {
                    label: 'no cheese',
                    value: 'no cheese'
                }
            ],
            ableToCustomSauce: [
                {
                label: 'Tomato relish',
                value: 'Tomato relish'
                },
                {
                    label: 'Aioli',
                    value: 'Aioli'
                },
                {
                    label: 'BBQ',
                    value: 'BBQ'
                },
                {
                    label: 'Mango',
                    value: 'Mango'
                },
                {
                    label: 'Raita',
                    value: 'Raita'
                },
                {
                    label: 'Sweet chili',
                    value: 'Sweet chili'
                },
                {
                    label: 'Mastard',
                    value: 'Mastard'
                },
                {
                    label: 'Tomato sauce',
                    value: 'Tomato sauce'
                },
                {
                    label: 'Tartar',
                    value: 'Tartar'
                },
                {
                    label: 'Taragon',
                    value: 'Taragon'
                },
                {
                    label: 'no-sauce',
                    value: 'no-sauce'
                }
            ],
        },
        Mr:
        {
            id: 4,
            name: 'Mr. Big Stuff',
            key: 'Mr',
            imageUrl: MrBigStuff,
            price: 16.90,
            ingredient: '3/4lb of Prime N.Z. beef, Cheddar cheese, streaky bacon, BBQ souse, lettuce, tomato, red onions & aioli',
            ableToCustomCheese: [
                {
                    label: 'Cheddar',
                    value: 'Cheddar'
                },
                {
                    label: 'Blue',
                    value: 'Blue'
                },
                {
                    label: 'Brie',
                    value: 'Brie'
                },
                {
                    label: 'Swiss',
                    value: 'Swiss'
                },
                {
                    label: 'no cheese',
                    value: 'no cheese'
                }
            ],
            ableToCustomSauce: [
                {
                label: 'Tomato relish',
                value: 'Tomato relish'
                },
                {
                    label: 'Aioli',
                    value: 'Aioli'
                },
                {
                    label: 'BBQ',
                    value: 'BBQ'
                },
                {
                    label: 'Mango',
                    value: 'Mango'
                },
                {
                    label: 'Raita',
                    value: 'Raita'
                },
                {
                    label: 'Sweet chili',
                    value: 'Sweet chili'
                },
                {
                    label: 'Mastard',
                    value: 'Mastard'
                },
                {
                    label: 'Tomato sauce',
                    value: 'Tomato sauce'
                },
                {
                    label: 'Tartar',
                    value: 'Tartar'
                },
                {
                    label: 'Taragon',
                    value: 'Taragon'
                },
                {
                    label: 'no-sauce',
                    value: 'no-sauce'
                }
            ],
        },
        TS:
        {
            id:5,
            name: 'Tropical Swine',
            key: 'TS',
            imageUrl: Tropi,
            price: 14.90,
            ingredient: 'Prime N.Z. beef, streaky bacon, Cheddar cheese, grilled pineapple, lettuce, tomato, red onion, aioli & tomato relish',
            ableToCustomCheese: [
                {
                    label: 'Cheddar',
                    value: 'Cheddar'
                },
                {
                    label: 'Blue',
                    value: 'Blue'
                },
                {
                    label: 'Brie',
                    value: 'Brie'
                },
                {
                    label: 'Swiss',
                    value: 'Swiss'
                },
                {
                    label: 'no cheese',
                    value: 'no cheese'
                }
            ],
            ableToCustomSauce: [
                {
                label: 'Tomato relish',
                value: 'Tomato relish'
                },
                {
                    label: 'Aioli',
                    value: 'Aioli'
                },
                {
                    label: 'BBQ',
                    value: 'BBQ'
                },
                {
                    label: 'Mango',
                    value: 'Mango'
                },
                {
                    label: 'Raita',
                    value: 'Raita'
                },
                {
                    label: 'Sweet chili',
                    value: 'Sweet chili'
                },
                {
                    label: 'Mastard',
                    value: 'Mastard'
                },
                {
                    label: 'Tomato sauce',
                    value: 'Tomato sauce'
                },
                {
                    label: 'Tartar',
                    value: 'Tartar'
                },
                {
                    label: 'Taragon',
                    value: 'Taragon'
                },
                {
                    label: 'no-sauce',
                    value: 'no-sauce'
                }
            ],
        },
        SS:
        {
            id:6,
            name: 'Southern Swine',
            key: 'SS',
            imageUrl: Southern,
            price: 13.90,
            ingredient: 'Prime N.Z. beef, streaky bacon, avocado, lettuce, tomato, red onion, aioli & tomato relish',
            ableToCustomCheese: [
                {
                    label: 'Cheddar',
                    value: 'Cheddar'
                },
                {
                    label: 'Blue',
                    value: 'Blue'
                },
                {
                    label: 'Brie',
                    value: 'Brie'
                },
                {
                    label: 'Swiss',
                    value: 'Swiss'
                },
                {
                    label: 'no cheese',
                    value: 'no cheese'
                }
            ],
            ableToCustomSauce: [
                {
                label: 'Tomato relish',
                value: 'Tomato relish'
                },
                {
                    label: 'Aioli',
                    value: 'Aioli'
                },
                {
                    label: 'BBQ',
                    value: 'BBQ'
                },
                {
                    label: 'Mango',
                    value: 'Mango'
                },
                {
                    label: 'Raita',
                    value: 'Raita'
                },
                {
                    label: 'Sweet chili',
                    value: 'Sweet chili'
                },
                {
                    label: 'Mastard',
                    value: 'Mastard'
                },
                {
                    label: 'Tomato sauce',
                    value: 'Tomato sauce'
                },
                {
                    label: 'Tartar',
                    value: 'Tartar'
                },
                {
                    label: 'Taragon',
                    value: 'Taragon'
                },
                {
                    label: 'no-sauce',
                    value: 'no-sauce'
                }
            ],
        },
        BE:
        {
            id:7,
            name: "The Bullseye",
            key: 'BE',
            imageUrl: BullsEye,
            price: 18.90,
            ingredient: 'Prime N.Z. Ribeye steak(200gm) grilled middium, topped with grilled caramelised white onion, your choice of cheese, lettuce, tomato, aioli & tomato relish',
            ableToCustomCheese: [
                {
                    label: 'Cheddar',
                    value: 'Cheddar'
                },
                {
                    label: 'Blue',
                    value: 'Blue'
                },
                {
                    label: 'Brie',
                    value: 'Brie'
                },
                {
                    label: 'Swiss',
                    value: 'Swiss'
                },
                {
                    label: 'no cheese',
                    value: 'no cheese'
                }
            ],
            ableToCustomSauce: [
                {
                label: 'Tomato relish',
                value: 'Tomato relish'
                },
                {
                    label: 'Aioli',
                    value: 'Aioli'
                },
                {
                    label: 'BBQ',
                    value: 'BBQ'
                },
                {
                    label: 'Mango',
                    value: 'Mango'
                },
                {
                    label: 'Raita',
                    value: 'Raita'
                },
                {
                    label: 'Sweet chili',
                    value: 'Sweet chili'
                },
                {
                    label: 'Mastard',
                    value: 'Mastard'
                },
                {
                    label: 'Tomato sauce',
                    value: 'Tomato sauce'
                },
                {
                    label: 'Tartar',
                    value: 'Tartar'
                },
                {
                    label: 'Taragon',
                    value: 'Taragon'
                },
                {
                    label: 'no-sauce',
                    value: 'no-sauce'
                }
            ],
        },
        CW:
        {
            id:8,
            name: 'Chief Wiggum',
            key: 'CW',
            imageUrl: Wiggum,
            price: 14.90,
            ingredient: 'Slow roasted pork belly, lettuce, tomato, red onion, hash brown, aioli & apricot seeded mustard',
            ableToCustomCheese: [
                {
                    label: 'Cheddar',
                    value: 'Cheddar'
                },
                {
                    label: 'Blue',
                    value: 'Blue'
                },
                {
                    label: 'Brie',
                    value: 'Brie'
                },
                {
                    label: 'Swiss',
                    value: 'Swiss'
                },
                {
                    label: 'no cheese',
                    value: 'no cheese'
                }
            ],
            ableToCustomSauce: [
                {
                label: 'Tomato relish',
                value: 'Tomato relish'
                },
                {
                    label: 'Aioli',
                    value: 'Aioli'
                },
                {
                    label: 'BBQ',
                    value: 'BBQ'
                },
                {
                    label: 'Mango',
                    value: 'Mango'
                },
                {
                    label: 'Raita',
                    value: 'Raita'
                },
                {
                    label: 'Sweet chili',
                    value: 'Sweet chili'
                },
                {
                    label: 'Mastard',
                    value: 'Mastard'
                },
                {
                    label: 'Tomato sauce',
                    value: 'Tomato sauce'
                },
                {
                    label: 'Tartar',
                    value: 'Tartar'
                },
                {
                    label: 'Taragon',
                    value: 'Taragon'
                },
                {
                    label: 'no-sauce',
                    value: 'no-sauce'
                }
            ],
        },
        COD:
        {
            id:9,
            name: 'The Codfather',
            key: 'COD',
            imageUrl: COD,
            price: 14.90,
            ingredient: "South Coast Blue Cod, tempura batter, Ferg's dill tartare, lettuce, tomato, aioli & tomato relish",
            ableToCustomCheese: [
                {
                    label: 'Cheddar',
                    value: 'Cheddar'
                },
                {
                    label: 'Blue',
                    value: 'Blue'
                },
                {
                    label: 'Brie',
                    value: 'Brie'
                },
                {
                    label: 'Swiss',
                    value: 'Swiss'
                },
                {
                    label: 'no cheese',
                    value: 'no cheese'
                }
            ],
            ableToCustomSauce: [
                {
                label: 'Tomato relish',
                value: 'Tomato relish'
                },
                {
                    label: 'Aioli',
                    value: 'Aioli'
                },
                {
                    label: 'BBQ',
                    value: 'BBQ'
                },
                {
                    label: 'Mango',
                    value: 'Mango'
                },
                {
                    label: 'Raita',
                    value: 'Raita'
                },
                {
                    label: 'Sweet chili',
                    value: 'Sweet chili'
                },
                {
                    label: 'Mastard',
                    value: 'Mastard'
                },
                {
                    label: 'Tomato sauce',
                    value: 'Tomato sauce'
                },
                {
                    label: 'Tartar',
                    value: 'Tartar'
                },
                {
                    label: 'Taragon',
                    value: 'Taragon'
                },
                {
                    label: 'no-sauce',
                    value: 'no-sauce'
                }
            ],
        },
        Tofu:
        {
            id:10,
            name: 'Holier Than Thou',
            key: 'Tofu',
            imageUrl: Tofu,
            price: 12.90,
            ingredient: 'Tempura tofu, spicy satay, coconut & coriander sauce, lettuce, tomato, red onion, cucumber, avocado, snowpea shoots & aioli',
            ableToCustomCheese: [
                {
                    label: 'Cheddar',
                    value: 'Cheddar'
                },
                {
                    label: 'Blue',
                    value: 'Blue'
                },
                {
                    label: 'Brie',
                    value: 'Brie'
                },
                {
                    label: 'Swiss',
                    value: 'Swiss'
                },
                {
                    label: 'no cheese',
                    value: 'no cheese'
                }
            ],
            ableToCustomSauce: [
                {
                label: 'Tomato relish',
                value: 'Tomato relish'
                },
                {
                    label: 'Aioli',
                    value: 'Aioli'
                },
                {
                    label: 'BBQ',
                    value: 'BBQ'
                },
                {
                    label: 'Mango',
                    value: 'Mango'
                },
                {
                    label: 'Raita',
                    value: 'Raita'
                },
                {
                    label: 'Sweet chili',
                    value: 'Sweet chili'
                },
                {
                    label: 'Mastard',
                    value: 'Mastard'
                },
                {
                    label: 'Tomato sauce',
                    value: 'Tomato sauce'
                },
                {
                    label: 'Tartar',
                    value: 'Tartar'
                },
                {
                    label: 'Taragon',
                    value: 'Taragon'
                },
                {
                    label: 'no-sauce',
                    value: 'no-sauce'
                }
            ],
        },
        Lafel:
        {
            id:11,
            name: 'Ferg-lafel',
            key: 'Lafel',
            imageUrl: Lafel,
            price: 12.90,
            ingredient: 'Falafel patties dressed with lemon yoghurt & chipotle chilli sauce, lettuce, tomato, red onion, cucumber, avocado & aioli',
            ableToCustomCheese: [
                {
                    label: 'Cheddar',
                    value: 'Cheddar'
                },
                {
                    label: 'Blue',
                    value: 'Blue'
                },
                {
                    label: 'Brie',
                    value: 'Brie'
                },
                {
                    label: 'Swiss',
                    value: 'Swiss'
                },
                {
                    label: 'no cheese',
                    value: 'no cheese'
                }
            ],
            ableToCustomSauce: [
                {
                label: 'Tomato relish',
                value: 'Tomato relish'
                },
                {
                    label: 'Aioli',
                    value: 'Aioli'
                },
                {
                    label: 'BBQ',
                    value: 'BBQ'
                },
                {
                    label: 'Mango',
                    value: 'Mango'
                },
                {
                    label: 'Raita',
                    value: 'Raita'
                },
                {
                    label: 'Sweet chili',
                    value: 'Sweet chili'
                },
                {
                    label: 'Mastard',
                    value: 'Mastard'
                },
                {
                    label: 'Tomato sauce',
                    value: 'Tomato sauce'
                },
                {
                    label: 'Tartar',
                    value: 'Tartar'
                },
                {
                    label: 'Taragon',
                    value: 'Taragon'
                },
                {
                    label: 'no-sauce',
                    value: 'no-sauce'
                }
            ],
        },
        fries:
        {
                id: 12,
                name: 'Fries + Choise of source',
                key: 'fries',
                imageUrl: Fries,
                price: 4.50,
                ingredient: 'aioli, wasabi mayonnaise, tomato sauce, BBQ or sweet chilli',
                ableToCustomCheese: [],
                ableToCustomSauce: [
                    {
                        label: 'Aioli',
                        value: 'Aioli'
                    },
                    {
                        label: 'Sweet chili',
                        value: 'Sweet chili'
                    },
                    {
                        label: 'Tomato sauce',
                        value: 'Tomato sauce'
                    },
                    {
                        label: 'BBQ',
                        value: 'BBQ'
                    },
                    {
                        label: 'no-sauce',
                        value: 'no-sauce'
                    },
                ],
        },
        Onion:
        {
                id:13,
                name: 'Onion rings',
                key: 'Onion',
                imageUrl: Onion,
                price: 7.50,
                ingredient: 'with aioli',
                ableToCustomCheese: [],
                ableToCustomSauce: []
        },
        Squid:
        {
                id: 14,
                name: 'salt and pepper squid',
                key: 'Squid',
                imageUrl: Squid,
                price: 9.50,
                ingredient: 'with wasabi mayonnaise',
                ableToCustomCheese: [],
                ableToCustomSauce: []
        }
    }

export default ITEM_DATA;