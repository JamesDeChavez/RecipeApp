import React, { useState } from "react";
import RecipeList from "../../components/RecipeList";
import { Recipe } from "../../utils/interfaces";
import RecipePage from "../RecipePage";

interface Props {
    renderConstants: string[],
    setRender: React.Dispatch<React.SetStateAction<string>>
}

const ViewRecipes: React.FC<Props> = (props) => {
    const [recipeSelected, setRecipeSelected] = useState<Recipe | undefined>();

    const className = 'ViewRecipes';
    return (
        <div className={className}>
            {!recipeSelected ?
                <RecipeList setRecipeSelected={setRecipeSelected} {...props} />
            :
                <RecipePage recipe={recipeSelected} setRecipeSelected={setRecipeSelected} />
            }
        </div>
    );
};

export default ViewRecipes;