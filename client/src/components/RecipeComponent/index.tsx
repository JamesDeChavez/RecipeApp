import React from "react";
import { Ingredient, Recipe } from "../../utils/interfaces";
import RecipeIngredients from "../RecipeIngredients";
import RecipeInstructions from "../RecipeInstructions";
import RecipeVideo from "../RecipeVideo";
import './styles.css';

interface Props {
    recipe: Recipe,
    setEditActive: React.Dispatch<React.SetStateAction<boolean>>,
    setOrderActive: React.Dispatch<React.SetStateAction<boolean>>,
    setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>
}

const RecipeComponent: React.FC<Props> = ({ recipe, setEditActive, setOrderActive, setIngredients }) => {
    
    const editRecipe = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setEditActive(prevState => !prevState);
    };
    
    const className= 'Recipe';
    return (
        <div className={className}>
            <h3>{`Recipe: ${recipe.title} by ${recipe.video.channel}`}</h3>
            
            <RecipeVideo video={recipe.video} />

            <RecipeInstructions instructions={recipe.instructions} />

            <RecipeIngredients ingredients={recipe.ingredients} setOrderActive={setOrderActive} setIngredients={setIngredients} />

            <button onClick={editRecipe}>Edit Recipe</button>
        </div>
    );
};

export default RecipeComponent;
