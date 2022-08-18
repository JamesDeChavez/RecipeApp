import React, { useState, useRef } from 'react';
import { Ingredient, Instruction, Recipe, Video } from '../../utils/interfaces';
import IngredientsForm from '../IngredientsForm';
import InstructionsForm from '../InstructionsForm';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

interface Props {
    vidSelected: Video,
    setVidSelected: React.Dispatch<React.SetStateAction<Video | undefined>>
};

const CreateFormNoVid: React.FC<Props> = ({ vidSelected, setVidSelected }) => {
    const [title, setTitle] = useState('');
    const [instructions, setInstructions] = useState<Instruction[]>([]);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

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
            ingredients: ingredients,
            instructions: instructions
        };
        console.log(newRecipe);
    };

    const goBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault();
        setVidSelected(undefined);
    }

    const className = 'CreateFormNoVid';
    return (
        <div className={className}>
            <div className={`${className}_container`}>                    

                <div className={`${className}_formContainer`}> 

                    <span className={`${className}_backward`} onClick={goBack}>
                        <FontAwesomeIcon icon={faBackward} />{` Back`}
                    </span>

                    <input 
                        type="text" 
                        id='title'
                        placeholder='* Enter Recipe Title'
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

export default CreateFormNoVid;