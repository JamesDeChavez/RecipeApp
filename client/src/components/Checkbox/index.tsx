import React, { useState } from "react";
import { Ingredient } from "../../utils/interfaces";
import './styles.css';

interface Props {
    name: string,
    id: string,
    ingredients: Ingredient[],
    setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>
}

const Checkbox: React.FC<Props> = ({ name, id, ingredients, setIngredients}) => {

    const [checked, setChecked] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(!checked);        
        let newState = [];
        if(e.target.checked === true) {
            for (let ingredient of ingredients) {
                let newStateIngredient = { ...ingredient }
                if (ingredient.name === e.target.name) {
                    newStateIngredient.include = true;
                }
                newState.push(newStateIngredient);
            }
        } else {
            for (let ingredient of ingredients) {
                let newStateIngredient = { ...ingredient }
                if (ingredient.name === e.target.name) {
                    newStateIngredient.include = false;
                }
                newState.push(newStateIngredient);
            }
        }
        setIngredients(newState);        
    }

    return (
        <input 
            type='checkbox' 
            name={name} 
            value={name}
            onChange={handleChange}
            key={id} 
            checked={checked}
        />
    )
}

export default Checkbox