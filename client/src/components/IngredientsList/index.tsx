import React from "react";

interface Props {
    setAddIngredientActive: React.Dispatch<React.SetStateAction<boolean>>
};

const IngredientsList: React.FC<Props> = ({ setAddIngredientActive }) => {

    const addIngredient = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setAddIngredientActive(prevState => !prevState);
    };

    const className = 'IngredientsList';
    return (
        <div className={className}>
            <h3>Ingredients List Component</h3>
            <button onClick={addIngredient}>Add Ingredient</button>
        </div>
    );
};

export default IngredientsList;