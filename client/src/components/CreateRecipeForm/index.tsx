import React, { useState, useRef } from 'react';
import { Recipe, Video } from '../../utils/interfaces';
import IngredientsForm from '../IngredientsForm';
import InstructionsForm from '../InstructionsForm';
import './styles.css';

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
            <div className={`${className}_container`}>

                <div className={`${className}_leftContainer`}>    
                    {vidSelected.videoId !== 'N/A' ? 
                        <div className={`${className}_iframeResponsive`}>
                            <iframe 
                                src={`https://www.youtube.com/embed/${vidSelected.videoId}?enablejsapi=1&version=3&playerapiid=ytplayer`} 
                                title="Video Player" 
                                ref={vidRef}
                                className={`${className}_iframe`}
                            ></iframe>
                        </div>            
                    : <></> }

                    <div className={`${className}_buttonContainer`}>
                        <button onClick={handleSave}>Add Instruction</button>
                        <button onClick={returnToSearch}>Add Ingredient</button>
                    </div> 
                </div>

                <div className={`${className}_formContainer`}>                    
                    <input 
                        type="text" 
                        id='title'
                        placeholder='* Recipe Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`${className}_title`}
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

                    <button className={`${className}_save`}>Save Recipe</button>

                </div>      
                
                
            </div>
        </div>
    )
};

export default CreateRecipeForm;