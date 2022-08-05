import React, { useState } from "react";
import EditRecipeForm from "../../components/EditRecipeForm";
import { Recipe } from "../../utils/interfaces";
import RecipePage from "../RecipePage";

interface Props {
    recipe: Recipe
}

const EditRecipe: React.FC<Props> = ({ recipe }) => {
    const [editActive, setEditActive] = useState(false);
    
    const className = 'EditRecipe';
    return (
        <div className={className}>
            <h3>Edit Recipe Page</h3>
            {!editActive ?
                <RecipePage recipe={recipe} setEditActive={setEditActive} />
            :
                <EditRecipeForm recipe={recipe} setEditActive={setEditActive} />
            }
        </div>
    );
};

export default EditRecipe;