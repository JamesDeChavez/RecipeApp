import React from "react";
import { Ingredient } from "../../utils/interfaces";
import IngredientsFormItem from "../IngredientsFormItem";
import './styles.css';

interface Props {
    ingredients: Ingredient[],
    setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>,
    vidRef: React.MutableRefObject<any>
};

const IngredientsForm: React.FC<Props> =({ ingredients, setIngredients, vidRef }) => {

    const addItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        vidRef.current!.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        let newState = [...ingredients];
        newState.push({ 
            name: '',
            brand: '',
            amount: '2 lbs'
        });
        setIngredients(newState);
    };

    const deleteItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, idx: number) => {
        e.preventDefault();
        let newState = [...ingredients];
        newState.splice(idx, 1);
        setIngredients(newState);
    };

    const className = 'IngredientsForm';
    return (
        <div className={className}>
            <div className={`${className}_topContainer`}>
                <h4 className={`${className}_header`}>Ingredients:</h4>
                <ul className={`${className}_list`}>
                    <IngredientsFormItem />
                </ul>
            </div>
            <div className={`${className}_bottomContainer`}>
                <button onClick={addItem} className={`${className}_button`}>Add Item</button>
            </div>
        </div>
    );
};

export default IngredientsForm;