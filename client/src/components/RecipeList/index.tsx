import React from "react";
import { Recipe } from "../../utils/interfaces";

interface Props {
    setRecipeSelected: React.Dispatch<React.SetStateAction<Recipe | undefined>>
};

const RecipeList: React.FC<Props> = ({ setRecipeSelected }) => {

    const mockRecipe = {
        video: {
            _id: '123',
            title: 'Fake Title',
            thumbnail: 'Fake Thumbnail',
            channel: 'Fake Channel',
            videoId: 'FakeId'
        },
        ingredients: ['item 1', 'item 2'],
        instructions: ['step 1', 'step 2']
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setRecipeSelected(mockRecipe);
    };

    const className= 'RecipeList';
    return (
        <div className={className}>
            <h3>Recipe List</h3>
            <button onClick={handleClick}>Select Recipe</button>
        </div>
    );
};

export default RecipeList;