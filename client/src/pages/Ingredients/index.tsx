import { useState } from "react";
import IngredientForm from "../../components/IngredientForm";
import IngredientsList from "../../components/IngredientsList";

const Ingredients = () => {
    const [addIngredientActive, setAddIngredientActive] = useState(false);

    const className = 'Ingredients';
    return (
        <div className={className}>
            <h3>Ingredients Component</h3>
            {!addIngredientActive ?
                <IngredientsList setAddIngredientActive={setAddIngredientActive} />
            :
                <IngredientForm />
            }
        </div>
    );
};

export default Ingredients;