import React from "react";
import { Recipe } from "../../utils/interfaces";

interface Props {
    recipe: Recipe,
    setEditActive: React.Dispatch<React.SetStateAction<boolean>>,
    setOrderActive: React.Dispatch<React.SetStateAction<boolean>>
}

const RecipeComponent: React.FC<Props> = ({ recipe, setEditActive, setOrderActive }) => {
    
    const editRecipe = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setEditActive(prevState => !prevState);
    };

    const orderIngredients = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setOrderActive(prevState => !prevState);
    };
    
    const className= 'Recipe';
    return (
        <div className={className}>
            <h3>Recipe Component</h3>
            <button onClick={editRecipe}>Edit Recipe</button>
            <button onClick={orderIngredients}>Order Ingredients</button>
            <div>{recipe.video.title}</div>
        </div>
    );
};

export default RecipeComponent;
