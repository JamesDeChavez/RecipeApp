import React, { useState, useRef } from 'react';
import { Video } from '../../utils/interfaces';

interface Props {
    selectedVideo: Video,
    setSelectedVideo: React.Dispatch<React.SetStateAction<Video | undefined>>
};

const className = 'RecipeForm';

const RecipeForm: React.FC<Props> = ({ selectedVideo, setSelectedVideo }) => {
    const [instructions, setInstructions] = useState([
        { text: '' }
    ]);
    const [ingredients, setIngredients] = useState([
        { text: '' }
    ]);
    const [review, setReview] = useState(false);

    const vidRef = useRef<any>();

    const onChange_Instruction = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        let newState = [...instructions];
        newState[idx]['text'] = e.target.value;
        setInstructions(newState);
    };

    const onChange_Ingredient = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        let newState = [...ingredients];
        newState[idx]['text'] = e.target.value;
        setIngredients(newState);
    };

    const addStep = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        vidRef.current!.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        let newState = [...instructions];
        newState.push({ text: '' });
        setInstructions(newState);
    };

    const deleteStep = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, idx: number) => {
        e.preventDefault();          
        let newState = [...instructions];
        newState.splice(idx, 1);
        setInstructions(newState);
    };

    const addItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        vidRef.current!.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        let newState = [...ingredients];
        newState.push({ text: '' });
        setIngredients(newState);
    };

    const deleteItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, idx: number) => {
        e.preventDefault();
        let newState = [...ingredients];
        newState.splice(idx, 1);
        setIngredients(newState);
    };

    const returnToSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setSelectedVideo(undefined);
    };

    const reviewRecipe = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setReview(true);
    };

    const onSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const newRecipe = {
            video: selectedVideo,
            ingredients,
            instructions
        }
        console.log(newRecipe);
    };

    const onEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setReview(false);
    }

    return (
        <div className={className}>
            {!review ? 
            <>
                <button onClick={returnToSearch}>Return to Video Search</button><br/>
                {selectedVideo.videoId === 'N/A' ?
                    <></>
                :
                    <iframe src={`https://www.youtube.com/embed/${selectedVideo.videoId}?enablejsapi=1&version=3&playerapiid=ytplayer`} frameBorder="0" title="Video Player" ref={vidRef}></iframe>
                }

                <h4>Instructions</h4>
                <form>
                    {instructions.map((step, index) => {
                        return (
                            <div key={`step_${index+1}`}>
                                <label htmlFor={`step_${index+1}`}>{`Step ${index+1}: `}</label>
                                <input 
                                    type='text'
                                    id={`step_${index+1}`}
                                    value={step.text}
                                    autoComplete='off'
                                    onChange={(e) => onChange_Instruction(e, index)}
                                />
                                <button onClick={(e) => deleteStep(e, index)}>Delete</button>
                            </div>
                        )
                    })}
                    <button onClick={addStep}>Add Step</button>
                </form>

                <h4>Ingredients</h4>
                <form>
                    {ingredients.map((item, index) => {
                        return (
                            <div key={`item_${index+1}`}>
                                <label htmlFor={`item_${index+1}`}>{`${index+1}. `}</label>
                                <input 
                                    type='text'
                                    id={`item_${index+1}`}
                                    value={item.text}
                                    autoComplete='off'
                                    onChange={(e) => onChange_Ingredient(e, index)}
                                />
                                <button onClick={(e) => deleteItem(e, index)}>Delete</button>
                            </div>
                        )
                    })}
                    <button onClick={addItem}>Add Item</button>
                </form>
                <button onClick={reviewRecipe}>Review Completed Recipe</button>
            </>
            :
            <>
                {selectedVideo.videoId === 'N/A' ?
                    <></>
                :
                    <iframe src={`https://www.youtube.com/embed/${selectedVideo.videoId}?enablejsapi=1&version=3&playerapiid=ytplayer`} frameBorder="0" title="Video Player"></iframe>
                }
                <h4>Instructions: </h4>
                <ul>
                    {instructions.map((step, index) => {
                        return (
                            <li key={`step_${index+1}`}>
                                {`Step ${index+1}: ${step.text}`}
                            </li>
                        )
                    })}
                </ul>

                <h4>Ingredients: </h4>
                <ul>
                    {ingredients.map((item, index) => {
                        return (
                            <li key={`item_${index+1}`}>
                                {`${index+1}. ${item.text}`}
                            </li>
                        )
                    })}
                </ul>
                <button onClick={onSave}>Save Recipe</button>
                <button onClick={onEdit}>Return to Edit</button>
            </>
            }
        </div>
    )
};

export default RecipeForm;