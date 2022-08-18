import { Recipe } from "./interfaces";


export const sampleRecipe: Recipe = {
    _id: '!23',
    title: 'Babish Chicken Parm',
    video: {
        _id: '123',
        title: 'Chicken Parmesan | Basics with Babish',
        thumbnail: 'https://i.ytimg.com/vi/ZrR0VbqNdW8/mqdefault.jpg',
        channel: 'Babish Culinary Universe',
        videoId: 'ZrR0VbqNdW8'
    },
    ingredients: [
        {
            name: 'Onion',
            brand: undefined,
            amount: '1/4 units'
        },
        {
            name: 'Garlic',
            brand: undefined,
            amount: '4 cloves'
        },
        {
            name: 'Tomato Paste',
            brand: 'Happy Belly',
            amount: '3 tbsp'
        },
        {
            name: 'Red Chili Flakes',
            brand: 'Happy Belly',
            amount: undefined
        },
        {
            name: 'Crushed Whole Tomatoes',
            brand: 'San Marzano',
            amount: '28 oz.'
        },
        {
            name: 'Oregano',
            brand: 'McCormick',
            amount: undefined,
        },
        {
            name: 'Basil',
            brand: undefined,
            amount: undefined,
        },
        {
            name: 'Salt',
            brand: 'Morton',
            amount: undefined,
        },
        {
            name: 'Black Pepper',
            brand: 'McCormick',
            amount: undefined,
        },
        {
            name: 'Chicken Breast',
            brand: 'Fresh',
            amount: '2 lbs'
        },
        {
            name: 'Egg',
            brand: undefined,
            amount: '4 units'
        },
        {
            name: 'Flour',
            brand: 'Happy Belly',
            amount: '1 cup'
        },
        {
            name: 'Garlic Powder',
            brand: 'McCormick',
            amount: undefined,
        },
        {
            name: 'Panko Bread Crumbs',
            brand: undefined,
            amount: '1 cup'
        },
        {
            name: 'Mozzarella Cheese',
            brand: undefined,
            amount: undefined,
        },
        {
            name: 'Parmesan Cheese',
            brand: undefined,
            amount: undefined,
        },
        {
            name: 'Pasta',
            brand: 'Barilla',
            amount: '1/4 cup'
        },
        {
            name: 'Butter',
            brand: undefined,
            amount: '2 tbsp'
        },
        /*FILL IN DATA*/
        {
            name: 'Butter',
            brand: undefined,
            amount: '2 tbsp'
        },
        {
            name: 'Butter',
            brand: undefined,
            amount: '2 tbsp'
        },
        {
            name: 'Butter',
            brand: undefined,
            amount: '2 tbsp'
        },
        {
            name: 'Butter',
            brand: undefined,
            amount: '2 tbsp'
        },
        {
            name: 'Butter',
            brand: undefined,
            amount: '2 tbsp'
        },
        {
            name: 'Butter',
            brand: undefined,
            amount: '2 tbsp'
        }
    ],
    instructions: [
        {
            summary: {
                action: 'COOK',
                items: ['Onion']
            },
            description: 'Sautee 1/4 Chopped Onion in a sauce pan.',
            ingredients: [
                {
                    name: 'Onion',
                    brand: undefined,
                    amount: '1/4 Units'
                }
            ],
            time: '3 min.'
        },
        {
            summary: {
                action: 'ADD',
                items: ['Garlic']
            },
            description: 'Add 4 cloves of Garlic to the sauce pan.',
            ingredients: [
                {
                    name: 'Garlic',
                    brand: undefined,
                    amount: '4 Cloves'
                }
            ],
            time: '30 sec'
        },
        {
            summary: {
                action: 'ADD',
                items: ['Tomato Paste', 'Red Chili Flakes']
            },
            description: 'Add 3 tablespoons of Tomato Paste and a few shakes of Red Chili Flakes to sauce pan.',
            ingredients: [
                {
                    name: 'Tomato Paste',
                    brand: 'Happy Belly',
                    amount: '3 Tablespoons'
                },
                {
                    name: 'Red Chili Flakes',
                    brand: 'Happy Belly',
                    amount: 'To Taste'
                }
            ],
            time: '1 min.'
        },
        {
            summary: {
                action: 'ADD',
                items: ['Crushed Whole Tomatoes']
            },
            description: 'Add 28 oz. of whole crushed tomatoes to sauce pan. Place over medium heat and bring to simmer.',
            ingredients: [
                {
                    name: 'Whole Tomatoes',
                    brand: 'San Marzano',
                    amount: '28 oz'
                }
            ],
            time: null
        },
        {
            summary: {
                action: 'ADD',
                items: ['Oregano', 'Basil', 'Water']
            },
            description: 'Add 1 Tablespoon Oregano, 2 stems of Basil, and 1 cup of Water to sauce pan. Simmer for 45 min..',
            ingredients: [
                {
                    name: 'Oregano',
                    brand: 'McCormick',
                    amount: '1 Tablespoon'
                },
                {
                    name: 'Basil',
                    brand: undefined,
                    amount: '2 Stems'
                },
                {
                    name: 'Water',
                    brand: undefined,
                    amount: '1 Cup'
                }
            ],
            time: '45 min.'
        },
        {
            summary: {
                action: 'ADD',
                items: ['Salt', 'Pepper']
            },
            description: 'Add Salt and Pepper to taste.',
            ingredients: [
                {
                    name: 'Salt',
                    brand: 'Morton',
                    amount: 'To taste'
                },
                {
                    name: 'Black Pepper',
                    brand: 'McCormick',
                    amount: undefined
                }
            ],
            time: null
        },
        {
            summary: {
                action: 'PREP',
                items: ['Chicken Breast']
            },
            description: 'Butterfly 4 Chicken Breasts, lay plastic wrap over them, and pound them out. Then season with Salt and Pepper',
            ingredients: [
                {
                    name: 'Chicken Breast',
                    brand: 'Fresh',
                    amount: '4 Units'
                },
                {
                    name: 'Salt',
                    brand: 'Morton',
                    amount: 'To taste'
                },
                {
                    name: 'Black Pepper',
                    brand: 'McCormick',
                    amount: 'To taste'
                }
            ],
            time: null
        },
        {
            summary: {
                action: 'PREP',
                items: ['Breading Station']
            },
            description: 'Set up breading station by beating 4 Eggs with a sprinkle of Flour in one bowl; then in another bowl, combine 1 Cup Flour and 1/2 Teaspoon each of Black Pepper, Garlic Powder, Oregano, and Basil; then one a baking sheet spread Panko Bread Crumbs',
            ingredients: [
                {
                    name: 'Egg',
                    brand: undefined,
                    amount: '4 Units'
                },
                {
                    name: 'Flour',
                    brand: 'Happy Belly',
                    amount: '1 Cup'
                },
                {
                    name: 'Black Pepper',
                    brand: 'McCormick',
                    amount: '1/2 Teaspoon'
                },
                {
                    name: 'Garlic Powder',
                    brand: 'McCormick',
                    amount: '1/2 Teaspoon'
                },
                {
                    name: 'Oregano',
                    brand: 'McCormick',
                    amount: '1/2 Teaspoon'
                },
                {
                    name: 'Basil',
                    brand: undefined,
                    amount: '1/2 Teaspoon'
                },
                {
                    name: 'Panko Bread Crumbs',
                    brand: undefined,
                    amount: '1 Cup'
                }
            ],
            time: null
        },
        {
            summary: {
                action: 'BREAD',
                items: ['Chicken Breast']
            },
            description: 'Dip the Chicken Breast into the Flour, then into the Egg, then into the Panko Bread Crumbs. Double coat for extra crispy Chicken.',
            ingredients: [],
            time: null
        },
        {
            summary: {
                action: 'COOK',
                items: ['Chicken Breast']
            },
            description: 'Fry Chicken Breasts in peanut oil on high heat for about 5 min., or until golden brown.',
            ingredients: [
                {
                    name: 'Chicken Breast',
                    brand: 'Fresh',
                    amount: '4 Units'
                }
            ],
            time: '5 min.'
        },
        
        {
            summary: {
                action: 'PREP',
                items: ['Chicken Breast']
            },
            description: 'Place Chicken Breast on baking sheet and top with Basil, slices of Mozzarella, and grated Parmesan Cheese',
            ingredients: [
                {
                    name: 'Chicken Breast',
                    brand: 'Fresh',
                    amount: '4 Units'
                },
                {
                    name: 'Basil',
                    brand: undefined,
                    amount: 'To taste'
                },
                {
                    name: 'Mozzarella Cheese',
                    brand: undefined,
                    amount: 'To taste'
                },
                {
                    name: 'Parmesan Cheese',
                    brand: undefined,
                    amount: 'To taste'
                }
            ],
            time: null
        },        
        {
            summary: {
                action: 'COOK',
                items: ['Chicken Breast']
            },
            description: 'Broil Chicken Breast for a few min. until cheese is melted and golden brown',
            ingredients: [
                {
                    name: 'Chicken Breast',
                    brand: 'Fresh',
                    amount: '4 Units'
                },
                {
                    name: 'Basil',
                    brand: undefined,
                    amount: 'To taste'
                },
                {
                    name: 'Mozzarella Cheese',
                    brand: undefined,
                    amount: 'To taste'
                },
                {
                    name: 'Parmesan Cheese',
                    brand: undefined,
                    amount: 'To taste'
                }
            ],
            time: '2 min.'
        },
        {
            summary: {
                action: 'COOK',
                items: ['Pasta']
            },
            description: 'Boil Pasta. When near done, add pasta to a seperate sauce pan with Pasta Sauce and Pasta Water. Mix well.',
            ingredients: [
                {
                    name: 'Pasta',
                    brand: 'Barilla',
                    amount: '1/4 Cup'
                },
            ],
            time: '10 min.'
        },
        {
            summary: {
                action: 'ADD',
                items: ['Basil', 'Parmesan Cheese', 'Butter']
            },
            description: 'Kill the heat then add chopped Basil, shaved Parmesan Cheese and 2 Tablespoons Butter to Pasta. Mix Well',
            ingredients: [
                {
                    name: 'Basil',
                    brand: undefined,
                    amount: 'To Taste'
                },
                {
                    name: 'Parmesan Cheese',
                    brand: undefined,
                    amount: 'To Taste'
                },
                {
                    name: 'Butter',
                    brand: undefined,
                    amount: '2 Tablespoons'
                },
            ],
            time: '10 min.'
        }
    ]
}