import React, { useState, useRef } from 'react';
import { Recipe, Video } from '../../utils/interfaces';
import IngredientsForm from '../IngredientsForm';
import InstructionsForm from '../InstructionsForm';

interface Props {
    vidSelected: Video,
    setVidSelected: React.Dispatch<React.SetStateAction<Video | undefined>>
};

const CreateRecipeForm: React.FC<Props> = ({ vidSelected, setVidSelected }) => {
    const [title, setTitle] = useState('');
    const [instructions, setInstructions] = useState([
        { text: '' }
    ]);
    const [ingredients, setIngredients] = useState([
        { text: '' }
    ]);

    const vidRef = useRef<any>();

    const returnToSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setVidSelected(undefined);
    };

    const handleSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const newRecipe: Recipe = {
            title: title,
            video: vidSelected,
            ingredients: ingredients.map(ingredient => ingredient.text),
            instructions: instructions.map(instruction => instruction.text)
        };
        console.log(newRecipe);
    };

    const className = 'CreateRecipeForm';
    return (
        <div className={className}>
            
            {vidSelected.videoId !== 'N/A' ? 
                <iframe src={`https://www.youtube.com/embed/${vidSelected.videoId}?enablejsapi=1&version=3&playerapiid=ytplayer`} title="Video Player" ref={vidRef}></iframe>                
            : <></> }

            <input 
                type="text" 
                id='title'
                placeholder='Enter Recipe Title Here'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoComplete= 'off'
            />

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
            <button onClick={returnToSearch}>Return to Video Search</button>
            
            
        </div>
    )
};

export default CreateRecipeForm;