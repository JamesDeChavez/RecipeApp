import classNames from "classnames";
import e from "express";
import React, { useEffect, useState } from "react";
import { Ingredient, Instruction } from "../../utils/interfaces";
import './styles.css';

interface Props {
    instructions: Instruction[],
    instructionModalVisible: boolean,
    setInstructionModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    setInstructions: React.Dispatch<React.SetStateAction<Instruction[]>>,
};

const ACTIONS = ['COOK', 'ADD', 'PREP', 'BREAD'];

const InstructionModal: React.FC<Props> = ({ instructions, instructionModalVisible, setInstructionModalVisible, setInstructions }) => {
    const [addEditSelect, setAddEditSelect] = useState<any>(-1);
    const [action, setAction] = useState('');
    const [itemToAdd, setItemToAdd] = useState('');
    const [items, setItems] = useState<string[]>([]);
    const [duration, setDuration] = useState('');
    const [timeUnit, setTimeUnit] = useState('sec.');
    const [description, setDescription] = useState('');
    const [ingredientName, setIngredientName] = useState('');
    const [ingredientAmount, setIngredientAmount] = useState('');
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    useEffect(() => {
        if (addEditSelect < 0) {
            setAction('');
            setItemToAdd('');
            setItems([]);
            setDuration('');
            setTimeUnit('sec.');
            setDescription('');
            setIngredientName('');
            setIngredientAmount('');
            setIngredients([]);
        } 
        if (addEditSelect >= 0) {
            setAction(instructions[addEditSelect].summary.action);
            setItems(instructions[addEditSelect].summary.items);
            setDescription(instructions[addEditSelect].description);
            setIngredients(instructions[addEditSelect].ingredients);
            if (instructions[addEditSelect].time !== null) {
                setDuration(instructions[addEditSelect].time!.split(' ')[0]);
                setTimeUnit(instructions[addEditSelect].time!.split(' ')[1]);
            }
        }
    }, [addEditSelect])
    
    const selectAction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
        e.preventDefault();
        setAction(ACTIONS[index]);
    };

    const addItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setItems(prevState => [...prevState, itemToAdd]);
        setItemToAdd('');
    };

    const addIngredient = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setIngredients(prevState => [...prevState, {
            name: ingredientName,
            amount: ingredientAmount
        }]);
        setIngredientName('');
        setIngredientAmount('');
    };

    const saveInstruction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const newInstruction = {
            summary: {
                action,
                items
            },
            description,
            ingredients,
            time: `${duration} ${timeUnit}`
        };
        if (addEditSelect < 0) {            
            setInstructions(prevState => [...prevState, newInstruction]);
        };
        if (addEditSelect >= 0) {
            setInstructions((prevState) => {
                const newState = [...prevState];
                newState[addEditSelect] = newInstruction;
                return newState;
            });
        }        
        setAddEditSelect(-1)
        setAction('');
        setItemToAdd('');
        setItems([]);
        setDuration('');
        setTimeUnit('sec.');
        setDescription('');
        setIngredientName('');
        setIngredientAmount('');
        setIngredients([]);
        setInstructionModalVisible(false);
    };

    const deleteInstruction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setInstructions((prevState) => {
            prevState.splice(addEditSelect, 1);
            return [...prevState];
        });
        setAddEditSelect(-1)
        setAction('');
        setItemToAdd('');
        setItems([]);
        setDuration('');
        setTimeUnit('sec.');
        setDescription('');
        setIngredientName('');
        setIngredientAmount('');
        setIngredients([]);
        setInstructionModalVisible(false);
    };

    const cancelInstruction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setAddEditSelect(-1)
        setAction('');
        setItemToAdd('');
        setItems([]);
        setDuration('');
        setTimeUnit('sec.');
        setDescription('');
        setIngredientName('');
        setIngredientAmount('');
        setIngredients([]);
        setInstructionModalVisible(false);
    };

    const className = 'InstructionModal';
    return (
        <div 
            className={className}
            style={{ display: instructionModalVisible ? 'grid' : 'none' }}
        >
            <h4 className={`${className}_header`}>Add Instruction:</h4>
            <form className={`${className}_form`}>

                <div className={`${className}_addEditContainer`}>
                    <span className={`${className}_label`}>Add/Edit: </span>
                    <select 
                        className={`${className}_addEditSelect`} 
                        name="addEditSelect" 
                        id="addEditSelect"
                        value={addEditSelect}
                        onChange={(e) => setAddEditSelect(e.target.value)}
                    >
                        <option value={-1}>Add New</option>
                        {instructions.map((step, index) => {
                            return (
                                <option value={index}>{`Edit Step ${index + 1}`}</option>
                            )
                        })}
                    </select>
                </div>
                
                <div className={`${className}_actionsContainer`}>
                    <span className={`${className}_label`}>Summary Action: </span>
                    {ACTIONS.map((act, index) => 
                        <button 
                            onClick={(e) => selectAction(e, index)}
                            className={classNames(
                                `${className}_actionButton`,
                                { [`${className}_actionButtonActive`]: (action === act) }
                            )}
                        >{act}</button>
                    )}
                </div>
                
                <div className={`${className}_itemsContainer`}>
                    <span className={`${className}_label`}>Summary Items:</span>
                    <input 
                        className={`${className}_itemInput`} 
                        type="text" 
                        name="itemToAdd"
                        value={itemToAdd}
                        onChange={(e) => setItemToAdd(e.target.value)}
                        autoComplete= 'off' 
                    />
                    <button 
                        className={`${className}_itemButton`}
                        onClick={addItem}
                    >Add Item</button>
                </div>
                
                <div className={`${className}_summaryContainer`}>
                    <span className={`${className}_label`}>
                        {`Summary: `}
                    </span>
                        

                    <span className={`${className}_summaryText`}>
                        {action ? action : '[SELECT ACTION]'}
                    </span>
                    
                    {items.length ? 
                        <span className={`${className}_summaryText`}>
                            {
                                items.map(ingredient => {
                                    return ingredient    
                                }).join(', ')
                            }
                        </span>  
                    :
                        <span className={`${className}_summaryText`}>
                            {`[ADD ITEMS]`}
                        </span>
                    }

                </div>

                <div className={`${className}_timeContainer`}>
                    <span className={`${className}_label`}>Duration: </span>
                    <input 
                        className={`${className}_timeInput`}
                        type="number" 
                        name="duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)} 
                    />
                    <select 
                        className={`${className}_timeSelect`} 
                        name="timeUnit" 
                        id="timeUnit"
                        value={timeUnit}
                        onChange={(e) => setTimeUnit(e.target.value)}
                    >
                        <option value="sec.">sec.</option>
                        <option value="min.">min.</option>
                        <option value="hr.">hr.</option>
                    </select>
                </div>

                <div className={`${className}_descriptionContainer`}>
                    <span className={`${className}_label`}>Detailed Description:</span>
                    <textarea
                        className={`${className}_descriptionInput`} 
                        name="description" 
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className={`${className}_ingredientsContainer`}>
                    <span className={`${className}_label`}>Ingredients:</span>
                    <input 
                        className={`${className}_ingredientNameInput`}
                        type="text" 
                        name='ingedientName'
                        placeholder='Enter Name'
                        value={ingredientName}
                        onChange={(e) => setIngredientName(e.target.value)}
                        autoComplete= 'off'
                    />
                    <input 
                        className={`${className}_ingredientAmountInput`}
                        type="text" 
                        name='ingredientAmount' 
                        placeholder='Enter Amount (Optional)'
                        value={ingredientAmount}
                        onChange={(e) => setIngredientAmount(e.target.value)}
                        autoComplete= 'off'
                    />
                    <button 
                        className={`${className}_ingredientButton`}
                        onClick={addIngredient}    
                    >Add Ingredient</button>
                </div>

                <ul className={`${className}_ingredientsList`}>
                    {ingredients.length ?
                    <>
                        {ingredients.map((ingredient, index) => {
                            return(
                                <li 
                                key={index} 
                                className={`${className}_ingredientListItem`}>
                                    {`${ingredient.name} - ${ingredient.amount}`}
                                </li>
                            )
                        })}
                    </>
                    :
                        <li className={`${className}_ingredientListItem`}>{`[No Ingredients Added]`}</li>
                    }
                    
                    
                </ul>

                <div className={`${className}_formButtons`}>
                    <button className={`${className}_formButton`} onClick={saveInstruction}>Save</button>
                    <button className={`${className}_formButton`} onClick={deleteInstruction} style={{display: addEditSelect < 0 ? 'none' : 'inherit'}}>Delete</button>
                    <button className={`${className}_formButton`} onClick={cancelInstruction}>Cancel</button>
                </div>
            </form>

        </div>
    );
};

export default InstructionModal;