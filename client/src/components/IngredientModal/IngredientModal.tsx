import React, { useEffect, useState } from "react";
import { Ingredient } from "../../utils/interfaces";
import './styles.css';

interface Props {
    userId?: String,
    ingredients: Ingredient[],
    ingredientModalVisible: boolean,
    setIngredientModalVisible: React.Dispatch<React.SetStateAction<boolean>>,    
    setIngredients?: React.Dispatch<React.SetStateAction<Ingredient[]>>,
    createIngredient: any,
    updateIngredient: any, 
    deleteIngredient: any
};

const IngredientModal: React.FC<Props> = ({ userId, ingredients, ingredientModalVisible, setIngredientModalVisible, createIngredient, updateIngredient, deleteIngredient }) => {
    const [addEditSelect, setAddEditSelect] = useState<any>(-1);
    const [ingredientId, setIngredientId] = useState<String | undefined>();
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
            setIngredientId(ingredients[addEditSelect]._id);
            if (ingredients[addEditSelect].brand) setBrand(ingredients[addEditSelect].brand!);
            if (ingredients[addEditSelect].amount) setAmount(ingredients[addEditSelect].amount!);
        }
    }, [addEditSelect, ingredients])

    const saveIngredient = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        
        if (addEditSelect < 0) {
            try {
                await createIngredient( { variables: { name, brand, userId } });
            } catch (error) {
                console.log(error)
            }
            
        }; 
        if (addEditSelect >= 0) {
            try {
                await updateIngredient({ variables: { updateIngredientId: ingredientId, name, brand } });
            } catch (error) {
                console.log(error);
            }
        };
        setAddEditSelect(-1);
        setName('');
        setBrand('');
        setAmount('');
        setIngredientModalVisible(false);
    };

    const handleDeleteIngredient = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            await deleteIngredient({variables: {deleteIngredientId: ingredientId}})
        } catch (error) {
            console.log(error);
        }
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
                        onClick={handleDeleteIngredient}
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