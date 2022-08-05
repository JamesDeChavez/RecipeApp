import React from "react";
import IngredientPage from "../../pages/IngredientPage";
import { Ingredient } from "../../utils/interfaces";

interface Props {
    ingredients: Ingredient[],
    setAddIngredientActive: React.Dispatch<React.SetStateAction<boolean>>
};

const IngredientsList: React.FC<Props> = ({ ingredients, setAddIngredientActive }) => {

    const addIngredient = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setAddIngredientActive(prevState => !prevState);
    };

    const className = 'IngredientsList';
    return (
        <div className={className}>
            <h3>Ingredients List Component</h3>
            <ul>
                {ingredients.map((item, index) =>
                    <IngredientPage
                        ingredient={item}
                        index={index}
                    />
                )}
            </ul>
            
            <button onClick={addIngredient}>Add Ingredient</button>
        </div>
    );
};

export default IngredientsList;