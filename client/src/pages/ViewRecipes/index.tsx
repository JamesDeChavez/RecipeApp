import React, { useState } from "react";
import RecipeList from "../../components/RecipeList";
import { Recipe } from "../../utils/interfaces";
import EditRecipe from "../EditRecipe";

interface Props {
    renderConstants: string[],
    setRender: React.Dispatch<React.SetStateAction<string>>
}

const ViewRecipes: React.FC<Props> = (props) => {
    const [recipeSelected, setRecipeSelected] = useState<Recipe | undefined>();

    const className = 'ViewRecipes';
    return (
        <div className={className}>
            <h3>View Recipe Component</h3>
            {!recipeSelected ?
                <RecipeList setRecipeSelected={setRecipeSelected} {...props} />
            :
                <EditRecipe recipe={recipeSelected} />
            }
        </div>
    );
};

export default ViewRecipes;