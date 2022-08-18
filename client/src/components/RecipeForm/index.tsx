import classNames from "classnames";
import React from "react";
import { Video } from "../../utils/interfaces";
import './styles.css';

interface Props {
    title: string,
    wideViewActive: boolean,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    handleSave: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    addInstruction: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    addIngredient: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    setVidSelected?: React.Dispatch<React.SetStateAction<Video | undefined>>,
    setEditActive?: React.Dispatch<React.SetStateAction<boolean>>
    
};

const RecipeForm: React.FC<Props> = ({ title, wideViewActive, setTitle, handleSave, addInstruction, addIngredient, setVidSelected, setEditActive }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleReturn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setVidSelected && setVidSelected(undefined);
        setEditActive && setEditActive(false);
    };

    const className ='RecipeForm';
    return (
        <div className={classNames(
            className,
            { [`${className}_Wide`]: wideViewActive}
        )}>
            <div className={`${className}_headerContainer`} style={{display: wideViewActive ? 'none' : 'grid'}}>
                <h4 className={`${className}_header`}>Create Recipe Form</h4>
            </div>
            <div className={`${className}_titleContainer`}  style={{display: wideViewActive ? 'none' : 'grid'}}>
                <input 
                    className={`${className}_titleInput`}
                    type="text" 
                    id='title'
                    name='title'
                    placeholder='Enter Recipe Title Here'
                    value={title}
                    onChange={handleChange}
                    autoComplete='off'           
                />
            </div>
            <div className={classNames(
                `${className}_buttonsContainer`,
                { [`${className}_buttonsContainer_Wide`]: wideViewActive }
            )}>
                <div className={`${className}_addButtonsContainer`}>
                    <button 
                        className={`${className}_addButton`}
                        onClick={addInstruction}
                    >Add/Edit Instruction</button>
                    <button 
                        className={`${className}_addButton`}
                        onClick={addIngredient}
                    >Add/Edit Ingredient</button>
                </div>
                <div className={`${className}_recipeActionsContainer`} style={{display: wideViewActive ? 'none' : 'flex'}}>
                    <button 
                        className={`${className}_actionButton`}
                        onClick={handleSave}
                    >Save Recipe</button>
                    <button 
                        className={`${className}_actionButton`}
                        onClick={handleReturn}
                    >{setVidSelected ? 'Return to Search' : 'Cancel Edit' }</button>
                </div>
            </div>            

        </div>
    );
};

export default RecipeForm;