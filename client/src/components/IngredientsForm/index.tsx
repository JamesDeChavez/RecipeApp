import React from "react";

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
                                onChange={(e) => onChange(e, index)}
                            />
                            <button onClick={(e) => deleteItem(e, index)}>Delete</button>
                        </div>
                    )
                })}
                <button onClick={addItem}>Add Item</button>
            </form>
        </div>
    );
};

export default IngredientsForm;