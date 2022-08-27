import classNames from "classnames";
import React, { useEffect } from "react";
import { Ingredient } from "../../utils/interfaces";
import './styles.css';

interface Props {
    item: Ingredient,
    index: number,
    wideViewActive?: boolean,
    wideToDefault?: boolean,
    orderIngredientsActive?: boolean,
    shoppingList?: Ingredient[],
    setShoppingList?: React.Dispatch<React.SetStateAction<Ingredient[]>>
};

const ItemListItem: React.FC<Props> = ({ item, index, wideViewActive, wideToDefault, orderIngredientsActive, shoppingList, setShoppingList }) => {

    const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        e.preventDefault();
        const newState = [];
        if (shoppingList) {
            for (let ingredient of shoppingList) {
                let newStateIngredient = { ...ingredient }
                if (ingredient.name === item.name) {
                    newStateIngredient.include = !newStateIngredient.include;
                }
                newState.push(newStateIngredient);
            }
        }
        if (setShoppingList) setShoppingList(newState);
    }

    const className = 'ItemListItem';
    return (
        <li 
            className={classNames(
                className,
                { [`${className}_Wide`]: wideViewActive },
                { [`${className}_WideToDefault`]: wideToDefault },
                { [`${className}_OrderActive`]: orderIngredientsActive },
                { [`${className}_OrderActiveIncluded`]: orderIngredientsActive && shoppingList && shoppingList[
                    shoppingList.findIndex(ingredient => ingredient.name === item.name)
                ].include }
            )}  
            key={`${index}_${item.name}`}
            onClick={handleClick}
        >
            <div className={`${className}_container`}>
                <p className={`${className}_item`}>
                    {item.amount ? `${item.name} - ${item.amount}` : `${item.name}`}
                </p>                
            </div>
        </li>
    );
};

export default ItemListItem;