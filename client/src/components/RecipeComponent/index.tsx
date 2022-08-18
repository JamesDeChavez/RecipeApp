import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { Ingredient, Recipe } from "../../utils/interfaces";
import OrderForm from "../OrderForm";
import RecipeActions from "../RecipeActions";
import RecipeIngredients from "../RecipeIngredients";
import RecipeInstructions from "../RecipeInstructions";
import RecipeVideo from "../RecipeVideo";
import './styles.css';

interface Props {
    recipe: Recipe,
    setEditActive?: React.Dispatch<React.SetStateAction<boolean>>,
    setRecipeSelected?: React.Dispatch<React.SetStateAction<Recipe | undefined>>,
    isSample: boolean,
    RENDERS?: string[],
    setRender?: React.Dispatch<React.SetStateAction<string>>
}

const RecipeComponent: React.FC<Props> = ({ recipe, setEditActive, setRecipeSelected, isSample, RENDERS, setRender }) => {    
    const [shoppingList, setShoppingList] = useState<Ingredient[]>([]);

    useEffect(() => {
        const newShoppingListState = recipe.ingredients.map(item => {
            return {...item, include: true}
        });
        setShoppingList(newShoppingListState);
    }, []);
    
    //Views
    const [noVidActive, setNoVidActive] = useState(false);
    const [wideViewActive, setWideViewActive] = useState(false);
    const [orderIngredientsActive, setOrderIngredientsActive] = useState(false);
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
        setOrderIngredientsActive(false);
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
        setOrderIngredientsActive(false);
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

    const className = 'RecipeComponent';
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
                        title={recipe.title}
                        wideViewActive={wideViewActive}
                        noVidActive={noVidActive}
                        noVidView={noVidView}
                        defaultView={defaultView}
                        wideView={wideView}
                    />

                    <div style={{display: wideViewActive ? 'none' : 'inherit'}}>
                    {!orderIngredientsActive ?
                        <RecipeActions 
                            wideViewActive={wideViewActive}
                            setEditActive={setEditActive}
                            setOrderIngredientsActive={setOrderIngredientsActive}
                            setRecipeSelected={setRecipeSelected}
                            isSample={isSample}
                            RENDERS={RENDERS}
                            setRender={setRender}
                        />
                    :
                        <OrderForm 
                            shoppingList={shoppingList}
                            setShoppingList={setShoppingList}
                            setOrderIngredientsActive={setOrderIngredientsActive}
                        />
                    }                    
                    </div>

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
                            instructions={recipe.instructions}
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
                            ingredients={recipe.ingredients}
                            wideViewActive={wideViewActive}
                            wideToDefault={wideToDefault}
                            switchList={switchList}
                            shoppingList={shoppingList}
                            setShoppingList={setShoppingList}
                            orderIngredientsActive={orderIngredientsActive}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
};

export default RecipeComponent;
