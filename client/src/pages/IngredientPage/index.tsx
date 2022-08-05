import React, { useState } from "react";
import IngredientForm from "../../components/IngredientForm";
import IngredientItem from "../../components/IngredientItem";
import { Ingredient } from "../../utils/interfaces";

interface Props {
    ingredient: Ingredient,
    index: number
};

const IngredientPage: React.FC<Props> = ({ ingredient, index }) => {
    const [editActive, setEditActive] = useState(false);

    const className = 'IngredientPage';
    return (
        <li key={index} className={className} >
            {!editActive ?
                <IngredientItem 
                    ingredient={ingredient}
                    setEditActive={setEditActive}
                />
            :
                <IngredientForm 
                    ingredient={ingredient}
                    setActive={setEditActive}
                />
            }
        </li>
    );
};

export default IngredientPage;