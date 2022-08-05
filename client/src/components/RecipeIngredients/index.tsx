import React from "react";
import { Ingredient } from "../../utils/interfaces";

interface Props {
    ingredients: string[],
    setOrderActive: React.Dispatch<React.SetStateAction<boolean>>,
    setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>
};

const mockIngredients = [
    {
        _id: '123',
        name: 'Green apples',
        brand: 'Fresh'
    },
    {
        _id: '124',
        name: 'Strawberry greek yogurt',
        brand: 'Chobani'
    },
    {
        _id: '125',
        name: 'Chicken breast',
        brand: 'Fresh'
    },
    {
        _id: '126',
        name: 'Bananas',
        brand: 'Dole'
    }
];

const RecipeIngredients: React.FC<Props> = ({ ingredients, setOrderActive, setIngredients }) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setIngredients(mockIngredients);
        setOrderActive(prevState => !prevState);
    };

    const className = 'RecipeIngredients';
    return (
        <div className={className}>
            <h3>Ingredients:</h3>
            <ul>
                {ingredients.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
            <button onClick={handleClick}>Order Ingredients from Amazon Fresh</button>
        </div>
    );
};

export default RecipeIngredients;