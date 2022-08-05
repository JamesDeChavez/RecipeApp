import { create } from "domain";
import React, { useState } from "react";
import { Recipe } from "../../utils/interfaces";

interface Props {
    setRecipeSelected: React.Dispatch<React.SetStateAction<Recipe | undefined>>,
    renderConstants: string[],
    setRender: React.Dispatch<React.SetStateAction<string>>
};

const mockRecipes = [
    {
        title: 'Chicken Parm Recipe',
        video: {
            _id: '123',
            title: 'EASY CLASSIC CHICKEN PARMESAN Recipe',
            thumbnail: 'https://i.ytimg.com/vi/gwSOwAe_IVY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRp54EJwW_ptSoLL1aoTXEQuamKg',
            channel: 'Natashas Kitchen',
            videoId: 'gwSOwAe_IVY'
        },
        ingredients: ['Chicken Breast', 'Pasta', 'Sauce'],
        instructions: ['Cook Chicken', 'Cook Pasta', 'Cook Sauce']
    },
    {
        title: 'Beef Lasagna Recipe',
        video: {
            _id: '123',
            title: 'Beef Lasagna Recipe | Easy Dinner | - Natashas Kitchen',
            thumbnail: 'https://i.ytimg.com/vi/fVDsTP-pTXs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPRzT8ZiDKPtIKZDFxRrZq-gavvw',
            channel: 'Natashas Kitchen',
            videoId: 'fVDsTP-pTXs'
        },
        ingredients: ['Lasagna Noodles', 'Ground Beef', 'Sauce'],
        instructions: ['Cook Noodles', 'Cook Beef', 'Bake Lasagna']
    }
];

const RecipeList: React.FC<Props> = ({ setRecipeSelected, renderConstants, setRender }) => {
    const [recipes, setRecipes] = useState<Recipe[]>(mockRecipes);

    const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, idx: number) => {
        e.preventDefault();
        setRecipeSelected(recipes[idx]);
    };

    const createNewRecipe = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setRender(renderConstants[1]);
    };

    const className= 'RecipeList';
    return (
        <div className={className}>
            <h3>Recipe List</h3>
            {recipes ?
                <ul>
                    {recipes.map((recipe, idx) => {
                        return (
                            <li key={`${recipe.title}_${idx}`} onClick={(e) => handleClick(e, idx)}>
                                <div>{`Recipe: ${recipe.title} by ${recipe.video.channel}`}</div>
                                <img src={recipe.video.thumbnail} alt="recipe image" />
                            </li>
                        )
                    })}
                </ul>
            :
                <div>No Recipes Exist</div>
            }
            <button onClick={createNewRecipe}>Create New Recipe</button>
        </div>
    );
};

export default RecipeList;