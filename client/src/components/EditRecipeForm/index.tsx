import React from "react"
import { Recipe } from '../../utils/interfaces'

interface Props {
    recipe: Recipe
}

const EditRecipeForm: React.FC<Props> = ({ recipe }) => {
    const className = 'EditRecipeForm';
    return(
        <div className={className}>
            <h3>Edit Recipe Form Component</h3>
            <div>{recipe.video.title}</div>
        </div>
    );
};

export default EditRecipeForm;