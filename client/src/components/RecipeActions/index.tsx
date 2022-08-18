import React, { useState } from "react";
import classNames from "classnames";
import './styles.css';
import { Recipe } from "../../utils/interfaces";

interface Props {
    wideViewActive: boolean,
    setEditActive?: React.Dispatch<React.SetStateAction<boolean>>,
    setOrderIngredientsActive: (value: React.SetStateAction<boolean>) => void,
    setRecipeSelected?: React.Dispatch<React.SetStateAction<Recipe | undefined>>,
    isSample: boolean,
    RENDERS?: string[],
    setRender?: React.Dispatch<React.SetStateAction<string>>
};

const RecipeActions: React.FC<Props> = ({ wideViewActive, setEditActive, setOrderIngredientsActive, setRecipeSelected, isSample, RENDERS, setRender }) => {

    const handleEditClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setEditActive && setEditActive(true);
    };

    const handleOrderClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setOrderIngredientsActive(true);
    };

    const goBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setRecipeSelected && setRecipeSelected(undefined);
    };

    const createAccount = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(RENDERS);
        if (setRender && RENDERS) setRender(RENDERS[2]);
    };

    const className = 'RecipeActions';
    return(
        <div className={classNames(
            className,
            { [`${className}_Wide`]: wideViewActive }
        )}>
            <div className={`${className}_buttonContainer`}>
                <button 
                    className={`${className}_button`}
                    onClick={handleOrderClick}
                >Order Ingredients</button>
                <button 
                    className={`${className}_button`}
                    onClick={handleEditClick}
                    style={{display: isSample ? 'none' : 'inherit'}}
                >Edit Recipe</button>
                <button 
                    className={`${className}_button`}
                    onClick={goBack}
                    style={{display: isSample ? 'none' : 'inherit'}}
                >Return To Recipes</button>
                <button 
                    className={`${className}_button`}
                    onClick={createAccount}
                    style={{display: isSample ? 'inherit' : 'none'}}
                >Create an Account</button>
            </div>
            
        </div>
    );
};

export default RecipeActions;