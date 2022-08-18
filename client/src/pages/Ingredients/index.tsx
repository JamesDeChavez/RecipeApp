import { useState } from "react";
import IngredientForm from "../../components/IngredientForm";
import IngredientsList from "../../components/IngredientsList";
import { Ingredient } from "../../utils/interfaces";

const mockIngredients = [
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

const Ingredients = () => {
    const [addIngredientActive, setAddIngredientActive] = useState(false);
    const [ingredients, setIngredients] = useState<Ingredient[]>(mockIngredients);

    const className = 'Ingredients';
    return (
        <div className={className}>
            <h3>Ingredients Component</h3>
            {!addIngredientActive ?
                <IngredientsList 
                    ingredients={ingredients} 
                    setAddIngredientActive={setAddIngredientActive} 
                />
            :
                <IngredientForm 
                    ingredient={null}
                    setActive={setAddIngredientActive}
                />
            }
        </div>
    );
};

export default Ingredients;