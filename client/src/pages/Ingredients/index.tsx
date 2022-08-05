import { useState } from "react";
import IngredientForm from "../../components/IngredientForm";
import IngredientsList from "../../components/IngredientsList";
import { Ingredient } from "../../utils/interfaces";

const mockIngredients = [
    {
        _id: '123',
        name: 'Green apples',
        brand: 'Fresh'
    },
    {
        _id: '124',
        name: 'Strawberry greek yogurt',
        brand: 'Chobani'
    },
    {
        _id: '125',
        name: 'Chicken breast',
        brand: 'Fresh'
    },
    {
        _id: '126',
        name: 'Bananas',
        brand: 'Dole'
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