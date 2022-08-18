import React, { useEffect, useState } from "react";
import { Ingredient } from "../../utils/interfaces";

const mockDB_Ingredients = [
    {
        _id: '123',
        name: 'Green apples',
        brand: 'Fresh',
        amount: '5 lbs'
    },
    {
        _id: '125',
        name: 'Chicken breast',
        brand: 'Fresh',
        amount: '2 lbs'
    },
    {
        _id: '126',
        name: 'Bananas',
        brand: 'Dole',
        amount: '2 lbs'

    }
];

const associatesTag = 'jamesrecipeap-20';

const OrderIngredientsForm: React.FC = () => {

    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    useEffect(() => {
        const response = mockDB_Ingredients;
        const ingredientsList = response.map(ingredient => {
            return {
                name: ingredient.name,
                brand: ingredient.brand,
                amount: ingredient.amount,
                include: true
            }
        });
        setIngredients(ingredientsList);
        console.log('tag: ', associatesTag);
    }, []);

    const url = `https://www.amazon.com/afx/ingredients/landing?tag=${associatesTag}`;
    const value = JSON.stringify({ 
        ingredients: ingredients.filter(ingredient =>
            ingredient.include !== false
        )
    });
    const className = 'AmazonPage';

    return (
        <div className={className}>
            <h3>Amazon API Page</h3>

            <div>Amazon Fresh API</div>

            <form method="POST" action={url} className={`${className}_form`}>
                <input type="hidden" name="ingredients" value={value} />
                <input type="submit" value='Add to Amazon Fresh Cart' className={`${className}_submit`} />
            </form>

            {!ingredients.length ?
                <div  className={`${className}_noIngredients`}>No Ingredients</div>
            :
                <ul>
                    {ingredients.map(ingredient => {
                        return (
                            <li key={ingredient._id}  className={`${className}_listitem`}>
                                {ingredient.name}
                            </li>
                        )
                    })}
                </ul>
            }

        </div>
    )
}

export default OrderIngredientsForm;