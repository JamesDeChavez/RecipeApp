import React from "react";
import IngredientsFormItem from "../IngredientsFormItem";
import './styles.css';

interface Props {
    ingredients: { text: string }[],
    setIngredients: React.Dispatch<React.SetStateAction<{ text: string }[]>>,
    vidRef: React.MutableRefObject<any>
};

const IngredientsForm: React.FC<Props> =({ ingredients, setIngredients, vidRef }) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
        let newState = [...ingredients];
        newState[idx]['text'] = e.target.value;
        setIngredients(newState);
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

    const className = 'IngredientsForm';
    return (
        <div className={className}>
            <h4 className={`${className}_header`}>Ingredients:</h4>
            <ul className={`${className}_list`}>
                <IngredientsFormItem />
            </ul>
        </div>
    );
};

export default IngredientsForm;