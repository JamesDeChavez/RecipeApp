import React from "react";
import { Ingredient } from "../../utils/interfaces";
import './styles.css'

interface Props {
    shoppingList: Ingredient[],
    setShoppingList: React.Dispatch<React.SetStateAction<Ingredient[]>>,
    setOrderIngredientsActive: React.Dispatch<React.SetStateAction<boolean>>
};

const associatesTag = 'jamesrecipeap-20';

const OrderForm: React.FC<Props> = ({ shoppingList, setShoppingList, setOrderIngredientsActive }) => {

    const selectAll = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const newState: Ingredient[] = [];
        shoppingList.forEach(item => {
            item.include = true;
            newState.push(item);
        });
        setShoppingList(newState);
    };

    const unselectAll = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const newState: Ingredient[] = [];
        shoppingList.forEach(item => {
            item.include = false;
            newState.push(item);
        });
        setShoppingList(newState);
    };

    const cancelOrder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setOrderIngredientsActive(false);
    };
    
    const url = `https://www.amazon.com/afx/ingredients/landing?tag=${associatesTag}`;

    const value = JSON.stringify({ 
        ingredients: shoppingList.filter(ingredient =>
            ingredient.include !== false
        )
    });

    const className = 'OrderForm';
    return(
        <form method='POST' action={url} className={className}>
            <h3 className={`${className}_header`}>Amazon Fresh Order:</h3>
            <p className={`${className}_text`}>To the right, <span className={`${className}_greenText`}>SELECT</span> all ingredients to include in Amazon Fresh Order<br/>(<span className={`${className}_warning`}>this will send you to Amazon Fresh Shopping Cart</span>)</p>
            <div className={`${className}_selectButtonsContainer`}>
                <button 
                    className={`${className}_selectButton`}
                    onClick={selectAll}
                >Select All</button>
                <button 
                    className={`${className}_selectButton`}
                    onClick={unselectAll}
                >Unselect All</button>
            </div>
            <div className={`${className}_orderButtonsContainer`}>
                <button 
                    type='submit'
                    className={`${className}_orderButton`}    
                >Add To Amazon Cart</button>
                <button 
                    className={`${className}_orderButton`}
                    onClick={cancelOrder}
                >Cancel Order</button>
            </div>
            <input type='hidden' name='ingredients' value={value} />
        </form>
    );
};

export default OrderForm;