import React, { useState } from "react";
import OrderIngredientsForm from "../../components/OrderIngredientsForm";
import RecipeComponent from "../../components/RecipeComponent";
import { Recipe } from "../../utils/interfaces";

interface Props {
    recipe: Recipe,
    setEditActive: React.Dispatch<React.SetStateAction<boolean>>
};

const RecipePage: React.FC<Props> = ({ recipe, setEditActive }) => {
    const [orderActive, setOrderActive] = useState(false);

    const className = 'RecipePage'
    return (
        <div className={className}>
            <h3>Recipe Page</h3>
            {!orderActive ?
                <RecipeComponent recipe={recipe} setEditActive={setEditActive} setOrderActive={setOrderActive} />
            :
                <OrderIngredientsForm />
            }
        </div>
    );
};

export default RecipePage;