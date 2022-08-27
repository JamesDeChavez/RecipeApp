import React, { useEffect, useState } from "react";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Ingredient } from "../../utils/interfaces";
import ItemListItem from "../ItemListItem";
import IngredientModal from "../IngredientModal";
import { sampleIngredientsList as SIL } from '../../utils/sampleIngredientsList';
import { client } from "../../index";
import './styles.css';
import { gql } from "apollo-server-express";

interface Props {
    renderConstants: string[],
    setRender: React.Dispatch<React.SetStateAction<string>>
};

const associatesTag = 'jamesrecipeap-20';

const IngredientsList: React.FC<Props> = ({ renderConstants, setRender }) => {
    const [shoppingList, setShoppingList] = useState<Ingredient[]>([]);
    const [orderIngredientsActive, setOrderIngredientsActive] = useState(false);
    const [ingredientModalVisible, setIngredientModalVisible] = useState(false);

    const myIngredients = client.readFragment({
        id: "User:63085916c3fd15e92fbe6d97",
        fragment: gql`
            fragment MyIngredients on User {
                ingredients {
                    _id
                    name
                    brand
                    userId
                  }
            }
        `
    })

    useEffect(() => {
        console.log(myIngredients);
    }, [myIngredients]);

    useEffect(() => {
        const newShoppingListState = SIL.map(item => {
            return {name: item.name, brand: item.brand, include: true}
        });
        setShoppingList(newShoppingListState);
    }, [SIL]);

    const activateOrder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setOrderIngredientsActive(true);
    };

    const cancelOrder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setOrderIngredientsActive(false);
    };

    const addEditClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setIngredientModalVisible(true);    
    };

    const goBack = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault();
        setRender(renderConstants[0]);
    };

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

    const url = `https://www.amazon.com/afx/ingredients/landing?tag=${associatesTag}`;

    const value = JSON.stringify({ 
        ingredients: shoppingList.filter(ingredient =>
            ingredient.include !== false
        )
    });

    const className = 'IngredientsList';
    return (
        <div className={className}>
            <div className={`${className}_container`}>
                <div className={`${className}_imageContainer`}>
                    <div className={`${className}_overlay`}></div>
                </div>
                <div 
                    className={`${className}_rightContainer`}
                >

                    <span className={`${className}_backward`} onClick={goBack}>
                        <FontAwesomeIcon icon={faBackward} />
                        {` Back`}
                    </span>

                    <h3 className={`${className}_header`}>Your Ingredients</h3>                 

                    <div className={`${className}_buttonContainer`}>
                        {!orderIngredientsActive ? 
                        <>
                            <button 
                                className={`${className}_button`}
                                onClick={addEditClick}
                            >Add/Edit Ingredient</button>
                            <button 
                                className={`${className}_button`}
                                onClick={activateOrder}
                            >Order Ingredients</button>
                        </>
                        :
                        <>
                            <button 
                                className={`${className}_button`}
                                onClick={selectAll}
                            >Select All</button>
                            <button 
                                className={`${className}_button`}
                                onClick={unselectAll}
                            >Unselect All</button>
                            <form method="POST" action={url}>
                                <button 
                                    className={`${className}_button`}
                                    type='submit'
                                >Add to Amazon Fresh Cart</button>
                                <input type='hidden' name='ingredients' value={value} />
                            </form>                            
                            <button 
                                className={`${className}_button`}
                                onClick={cancelOrder}
                            >Cancel Order</button>
                        </>
                        }
                    </div>

                    <p className={`${className}_text`} style={{display: orderIngredientsActive ? 'block' : 'none'}}>
                        <span className={`${className}_greenText`}>SELECT</span>
                        {` all ingredients to include in Amazon Fresh Order`}<br/>
                        (<span className={`${className}_warning`}>this will send you to Amazon Fresh Shopping Cart</span>)
                    </p>

                    <ul className={`${className}_list`}>
                        {/* {ingredients.map((item, index) => {
                            return (
                                <ItemListItem
                                    item={item}
                                    index= {index}
                                    orderIngredientsActive={orderIngredientsActive}
                                    shoppingList={shoppingList}
                                    setShoppingList={setShoppingList}
                                />
                            )
                        })}                         */}
                   </ul>
                    
                    <div 
                        className={`${className}_modalContainer`}
                        style={{display: ingredientModalVisible ? 'grid' : 'none'}}
                    >
                        {/* <IngredientModal 
                            ingredients={ingredients}
                            ingredientModalVisible={ingredientModalVisible}
                            setIngredientModalVisible={setIngredientModalVisible}
                        /> */}
                    </div> 
                   
                 
                </div>
            </div>
        </div>
    );
};

export default IngredientsList;