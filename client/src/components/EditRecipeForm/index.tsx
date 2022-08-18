import React, { useState, useRef } from 'react';
import { Ingredient, Instruction, Recipe, Video } from '../../utils/interfaces';
import { faBackward, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';
import RecipeVideo from '../RecipeVideo';
import RecipeInstructions from '../RecipeInstructions';
import RecipeIngredients from '../RecipeIngredients';
import RecipeForm from '../RecipeForm';
import InstructionModal from '../InstructionModal';
import IngredientModal from '../IngredientModal';
import classNames from 'classnames';

interface Props {
    recipe: Recipe,
    setEditActive: React.Dispatch<React.SetStateAction<boolean>>
};

const EditRecipeForm: React.FC<Props> = ({ recipe, setEditActive }) => {
    const [title, setTitle] = useState(recipe.title);
    const [instructions, setInstructions] = useState<Instruction[]>(recipe.instructions);
    const [ingredients, setIngredients] = useState<Ingredient[]>(recipe.ingredients);
    
    const [instructionModalVisible, setInstructionModalVisible] = useState(false);
    const [ingredientModalVisible, setIngredientModalVisible] = useState(false);
    
    //Views
    const [noVidActive, setNoVidActive] = useState(false);
    const [wideViewActive, setWideViewActive] = useState(false);
    const [topContainerVisible, setTopContainerVisible] = useState(true);
    const [bottomContainerVisible, setBottomContainerVisible] = useState(true);
    const [instructionDetailsVisible, setInstructionDetailsVisible] = useState(false);

    //Animations
    const [wideToDefault, setWideToDefault] = useState(false);
    const [hideToDefault, setHideToDefault] = useState(false);
    const [wideToHide, setWideToHide] = useState(false); 

    const vidRef = useRef<any>();

    const noVidView = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (noVidActive) return;
        if (wideViewActive) setWideToHide(true);
        setWideViewActive(false);
        setNoVidActive(true);
        setTopContainerVisible(true)
        setBottomContainerVisible(true);
        setWideToDefault(false);
        setHideToDefault(false);
    };

    const wideView = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (wideViewActive) return;
        setNoVidActive(false);
        setWideViewActive(true);
        setBottomContainerVisible(false);
        setWideToDefault(false);
        setHideToDefault(false);
        setWideToHide(false);
    };

    const defaultView = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.preventDefault();
        if (!noVidActive && !wideViewActive) return; 
        if (wideViewActive) setWideToDefault(true);
        if (noVidActive) setHideToDefault(true);
        setNoVidActive(false);
        setWideViewActive(false);
        setTopContainerVisible(true)
        setBottomContainerVisible(true);
        setWideToHide(false);
    };
    
    const switchList = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault();
        setTopContainerVisible(prevState => !prevState);
        setBottomContainerVisible(prevState => !prevState);
        setInstructionDetailsVisible(false);
    };

    const addInstruction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setIngredientModalVisible(false);
        setInstructionModalVisible(true);
    };

    const addIngredient = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setInstructionModalVisible(false)
        setIngredientModalVisible(true);
    };

    const handleSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const newRecipe: Recipe = {
            title: title,
            video: recipe.video,
            ingredients: ingredients,
            instructions: instructions
        };
        console.log(newRecipe);
    };

    const className = 'EditRecipeForm';
    return (
        <div className={className}>
            <div className={classNames(
                `${className}_container`,
                { [`${className}_container_NoVid`]: noVidActive },
                { [`${className}_container_Wide`]: wideViewActive },
                { [`${className}_container_WideToDefault`]: wideToDefault },
                { [`${className}_container_HideToDefault`]: hideToDefault },
                { [`${className}_container_WideToHide`]: wideToHide }
            )}>

                <FontAwesomeIcon
                    icon={faSquarePlus}
                    className={classNames(
                        `${className}_plusButton`, 
                        { [`${className}_plusButton_NoVid`]: noVidActive }
                    )}
                    onClick={defaultView}
                />

                <div className={classNames(
                    `${className}_recipeLeftSection`,
                    { [`${className}_recipeLeftSection_NoVid`]: noVidActive },
                    { [`${className}_recipeLeftSection_Wide`]: wideViewActive }
                )}>
                    
                    <RecipeVideo 
                        videoId={recipe.video.videoId}
                        title={title}
                        wideViewActive={wideViewActive}
                        noVidActive={noVidActive}
                        noVidView={noVidView}
                        defaultView={defaultView}
                        wideView={wideView}
                    />

                    <RecipeForm 
                        title={title}
                        wideViewActive={wideViewActive}
                        setTitle={setTitle}
                        handleSave={handleSave}
                        addInstruction={addInstruction}
                        addIngredient={addIngredient}
                        setEditActive={setEditActive}
                    />

                </div>
                <div className={classNames(
                    `${className}_recipeRightSection`,
                    { [`${className}_recipeRightSection_Wide`]: wideViewActive }
                )}>
                    <div 
                        className={classNames(
                            `${className}_instructionsContainer`,
                            { [`${className}_instructionsContainer_Wide`]: wideViewActive }
                        )}
                        style={{ display: topContainerVisible ? 'grid' : 'none' }}
                    >
                        <RecipeInstructions 
                            instructions={instructions}
                            setInstructionDetailsVisible={setInstructionDetailsVisible}
                            switchList={switchList}
                            wideToDefault={wideToDefault}
                            wideViewActive={wideViewActive}
                            instructionDetailsVisible={instructionDetailsVisible}
                        />
                    </div>
                    <div 
                        className={classNames(
                            `${className}_ingredientsContainer`,
                            { [`${className}_ingredientsContainer_Wide`]: wideViewActive }
                        )}
                        style={{ display: bottomContainerVisible ? 'grid' : 'none'}}
                    >
                        <RecipeIngredients 
                            ingredients={ingredients}
                            wideViewActive={wideViewActive}
                            wideToDefault={wideToDefault}
                            switchList={switchList}
                        />
                    </div>
                    <div 
                        className={`${className}_modal`} 
                        style={{ display: instructionModalVisible || ingredientModalVisible ? 'grid' : 'none' }} 
                    >
                        <InstructionModal
                            instructions={instructions} 
                            instructionModalVisible={instructionModalVisible}
                            setInstructionModalVisible={setInstructionModalVisible}
                            setInstructions={setInstructions}
                        />
                        <IngredientModal 
                            ingredients={ingredients}
                            ingredientModalVisible={ingredientModalVisible}
                            setIngredientModalVisible={setIngredientModalVisible}
                            setIngredients={setIngredients}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EditRecipeForm;