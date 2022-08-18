import React, { useEffect, useState } from "react";
import { Ingredient } from "../../utils/interfaces";
import './styles.css';

interface Props {
    ingredients: Ingredient[],
    ingredientModalVisible: boolean,
    setIngredientModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>
};

const IngredientModal: React.FC<Props> = ({ ingredients, ingredientModalVisible, setIngredientModalVisible, setIngredients }) => {
    const [addEditSelect, setAddEditSelect] = useState<any>(-1);
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        if (addEditSelect < 0) {
            setName('');
            setBrand('');
            setAmount('')
        } 
        if (addEditSelect >= 0) {
            setName(ingredients[addEditSelect].name);
            if (ingredients[addEditSelect].brand) setBrand(ingredients[addEditSelect].brand!);
            if (ingredients[addEditSelect].amount) setAmount(ingredients[addEditSelect].amount!);
        }
    }, [addEditSelect])

    const saveIngredient = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const newIngredient = {
            name,
            brand,
            amount
        };
        if (addEditSelect < 0) {
            setIngredients(prevState => [...prevState, newIngredient]);
        }; 
        if (addEditSelect >= 0) {
            setIngredients((prevState) => {
                const newState = [...prevState];
                newState[addEditSelect] = newIngredient;
                return newState;
            });
        };
        setAddEditSelect(-1);
        setName('');
        setBrand('');
        setAmount('');
        setIngredientModalVisible(false);
    };

    const deleteIngredient = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setIngredients((prevState) => {
            prevState.splice(addEditSelect, 1)
            return prevState;
        });
        setAddEditSelect(-1);
        setName('');
        setBrand('');
        setAmount('');
        setIngredientModalVisible(false);
    };

    const cancelIngredient = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setAddEditSelect(-1);
        setName('');
        setBrand('');
        setAmount('');
        setIngredientModalVisible(false);
    };

    const className = 'IngredientModal';
    return (
        <div 
            className={className}
            style={{ display: ingredientModalVisible ? 'grid' : 'none' }}
        >
            <h4 className={`${className}_header`}>Add Ingredient:</h4>
            <form className={`${className}_form`}>
                <span className={`${className}_label`}>Add/Edit: </span>
                <select 
                    className={`${className}_addEditSelect`} 
                    name="addEditSelect" 
                    id="addEditSelect"
                    value={addEditSelect}
                    onChange={(e) => setAddEditSelect(e.target.value)}
                >
                    <option value={-1}>Add New</option>
                    {ingredients.map((item, index) => {
                        return (
                            <option value={index}>{`Edit ${item.name}`}</option>
                        )
                    })}
                </select>
                <label className={`${className}_label`} htmlFor="name">Name:</label>
                <input 
                    className={`${className}_input`} 
                    type="text"
                    id='name'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete='off'
                 />
                <label className={`${className}_label`} htmlFor="brand">Brand:</label>
                <input 
                    className={`${className}_input`} 
                    type="text" 
                    id='brand'
                    name='brand'
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    autoComplete='off'
                />
                <label className={`${className}_label`} htmlFor="amount">Amount:</label>
                <input 
                    className={`${className}_input`} 
                    type="text"
                    id='amount'
                    name='amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    autoComplete='off' 
                />
                <div className={`${className}_buttonsContainer`}>
                    <button 
                        className={`${className}_button`}
                        onClick={saveIngredient}
                    >Save</button>
                    <button 
                        className={`${className}_button`}
                        style={{display: addEditSelect < 0 ? 'none' : 'inherit'}}
                        onClick={deleteIngredient}
                    >Delete</button>
                    <button 
                        className={`${className}_button`}
                        onClick={cancelIngredient}
                    >Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default IngredientModal;