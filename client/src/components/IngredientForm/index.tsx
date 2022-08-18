import React, { useState } from "react";
import { Ingredient } from "../../utils/interfaces";

interface Props {
    ingredient: Ingredient | null,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
};

const IngredientForm: React.FC<Props> = ({ ingredient, setActive }) => {
    const [inputs, setInputs] = useState({
        name: ingredient ? ingredient.name : '',
        brand: ingredient ? ingredient.brand : '',
        amount: '2 lbs'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputs (prevState => ({ ...prevState, [e.target.id]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const ingredientData: Ingredient = {
            name: inputs.name,
            brand: inputs.brand,
            amount: inputs.amount
        };

        if (ingredient) ingredientData._id = ingredient._id;
        console.log(ingredientData);
    }

    const cancelEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setActive(false);
    };

    const className = 'IngredientForm';
    return (
        <div className={className}>
            <form onSubmit={handleSubmit}>    
                <label htmlFor="name">Name:</label>
                <input 
                    type="text"
                    id="name"
                    value={inputs.name}
                    onChange={handleChange}
                    autoComplete= 'off'
                />
                <label htmlFor="name">Brand:</label>
                <input 
                    type="text"
                    id="brand"
                    value={inputs.brand}
                    onChange={handleChange}
                    autoComplete= 'off'
                />
                <button type='submit'>Submit</button>
                <button onClick={cancelEdit}>Cancel</button>
            </form>
        </div>
    );
};

export default IngredientForm;