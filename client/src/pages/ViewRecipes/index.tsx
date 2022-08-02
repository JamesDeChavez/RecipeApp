import { useState } from "react";
import RecipeList from "../../components/RecipeList";
import { Recipe } from "../../utils/interfaces";
import EditRecipe from "../EditRecipe";

const ViewRecipes = () => {
    const [recipeSelected, setRecipeSelected] = useState<Recipe | undefined>();

    const className = 'ViewRecipes';
    return (
        <div className={className}>
            <h3>View Recipe Component</h3>
            {!recipeSelected ?
                <RecipeList setRecipeSelected={setRecipeSelected} />
            :
                <EditRecipe recipe={recipeSelected} />
            }
        </div>
    );
};

export default ViewRecipes;