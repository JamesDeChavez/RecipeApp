import React from "react";
import { Ingredient } from "../../utils/interfaces";

interface Props {
    ingredient: Ingredient,
    setEditActive: React.Dispatch<React.SetStateAction<boolean>>
};

const IngredientItem: React.FC<Props> = ({ ingredient, setEditActive }) => {

    const handleClick =(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setEditActive(true);
    };

    const className = 'IngredientItem';
    return (
        <div className={className}>
            <div>{`Name: ${ingredient.name}`}</div>
            <div>{`Brand: ${ingredient.brand}`}</div>
            <button onClick={handleClick}>Edit</button>      
        </div>                  
    );
};

export default IngredientItem;