import React, { useState } from "react";
import EditRecipeForm from "../../components/EditRecipeForm";
import RecipeComponent from "../../components/RecipeComponent";
import { Ingredient, Recipe } from "../../utils/interfaces";

interface Props {
    recipe: Recipe,
    setRecipeSelected: React.Dispatch<React.SetStateAction<Recipe | undefined>>
};

const RecipePage: React.FC<Props> = ({ recipe, setRecipeSelected }) => {
    const [editActive, setEditActive] = useState(false);

    const className = 'RecipePage';
    return (
        <div className={className}>
            {!editActive ?
                <RecipeComponent 
                    recipe={recipe} 
                    setEditActive={setEditActive}
                    setRecipeSelected={setRecipeSelected}
                    isSample={false}
                />
            :
                <EditRecipeForm 
                    recipe={recipe}
                    setEditActive={setEditActive}
                />
            }
        </div>
    );
};

export default RecipePage;