import React, { useEffect, useRef, useState } from "react"
import { Recipe } from '../../utils/interfaces'
import IngredientsForm from "../IngredientsForm";
import InstructionsForm from "../InstructionsForm";

interface Props {
    recipe: Recipe,
    setEditActive: React.Dispatch<React.SetStateAction<boolean>>
}

const EditRecipeForm: React.FC<Props> = ({ recipe, setEditActive }) => {
    const [title, setTitle] = useState(recipe.title);
    const [video, setVideo] = useState(recipe.video);
    const [instructions, setInstructions] = useState<{ text: string; }[]>([{
        text: ''
    }]);
    const [ingredients, setIngredients] = useState<{ text: string; }[]>([{
        text: ''
    }]);

    useEffect(() => {
        const newInstructionsState = recipe.instructions.map(step => {
            return { text: step }
        });
        setInstructions(newInstructionsState);
    }, []);

    useEffect(() => {
        const newIngredientsState = recipe.ingredients.map(item => {
            return { text: item }
        });
        setIngredients(newIngredientsState);
    }, []);

    const vidRef = useRef<any>();

    const returnToRecipe = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setEditActive(false);
    };

    const handleSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const newRecipe: Recipe = {
            title: title,
            video: video,
            ingredients: ingredients.map(ingredient => ingredient.text),
            instructions: instructions.map(instruction => instruction.text)
        };
        console.log(newRecipe);
    };

    const className = 'EditRecipeForm';
    return(
        <div className={className}>
            <h3>Edit Recipe Form Component</h3>
            
            <label htmlFor="title">Recipe Title: </label>
            <input 
                type="text"
                id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoComplete= 'off'
            /><br/>

            <iframe src={`https://www.youtube.com/embed/${video.videoId}?enablejsapi=1&version=3&playerapiid=ytplayer`} title="Video Player" ref={vidRef}></iframe>

            <InstructionsForm 
                instructions={instructions} 
                setInstructions={setInstructions}
                vidRef={vidRef} 
            />

            <IngredientsForm 
                ingredients={ingredients}
                setIngredients={setIngredients}
                vidRef={vidRef}
            />

            <button onClick={handleSave}>Save Recipe</button>
            <button onClick={returnToRecipe}>Cancel Edit</button>
            
        </div>
    );
};

export default EditRecipeForm;