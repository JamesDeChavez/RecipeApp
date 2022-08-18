import React from "react";
import { Ingredient } from "../../utils/interfaces";
import ItemListItem from "../ItemListItem";
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from "classnames";
import './styles.css';

interface Props {
    ingredients: Ingredient[],
    shoppingList?: Ingredient[],
    wideViewActive: boolean,
    wideToDefault: boolean,
    orderIngredientsActive?: boolean,
    switchList: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void,
    setShoppingList?: React.Dispatch<React.SetStateAction<Ingredient[]>>
};

const RecipeIngredients: React.FC<Props> = ({ ingredients, shoppingList, wideViewActive, wideToDefault, orderIngredientsActive, switchList, setShoppingList }) => {

    const className = 'RecipeIngredients';
    return (
        <div className={classNames(
            className,
            { [`${className}_Wide`]: wideViewActive }
        )}>
            <div className={`${className}_headerContainer`}>
                <h4 className={classNames(
                        `${className}_ingredientsHeader`,
                        { [`${className}_ingredientsHeader_Wide`]: wideViewActive }
                )}>Ingredients</h4>
                <span 
                    className={`${className}_switch`} 
                    onClick={switchList}
                    style={{display: wideViewActive ? 'inherit' : 'none'}}
                >
                    {`Go To Instructions `}
                    <FontAwesomeIcon icon={faAnglesRight} />
                </span>
            </div>

            <ul className={classNames(
                `${className}_ingredientsList`,
                { [`${className}_ingredientsList_Wide`]: wideViewActive }
            )}>                        
                {ingredients.map((item, index) => {
                    return (
                        <ItemListItem 
                            item={item} 
                            index={index}
                            wideViewActive={wideViewActive}
                            wideToDefault={wideToDefault}
                            orderIngredientsActive={orderIngredientsActive}
                            shoppingList={shoppingList}
                            setShoppingList={setShoppingList}
                            />
                    )
                })}
            </ul>
        </div>
    );
};

export default RecipeIngredients;