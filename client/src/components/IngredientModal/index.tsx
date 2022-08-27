import React from "react";
import { useCreate_IngredientMutation, useUpdateIngredientMutation, useDeleteIngredientMutation, LoginUserDocument } from "../../generated/graphql";
import { Ingredient } from "../../utils/interfaces";
import IngredientModal from "./IngredientModal";

interface Props {
    ingredients: Ingredient[],
    ingredientModalVisible: boolean,
    setIngredientModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    setIngredients?: React.Dispatch<React.SetStateAction<Ingredient[]>>
};

const IngredientModalContainer: React.FC<Props> = (props) => {
    const [createIngredient, createResponse] = useCreate_IngredientMutation();
    const [updateIngredient, updateResponse] = useUpdateIngredientMutation();
    const [deleteIngredient, deleteResponse] = useDeleteIngredientMutation();

    if (createResponse.loading) console.log('1', createResponse.loading);
    if (updateResponse.loading) console.log('2', updateResponse.loading);
    if (deleteResponse.loading) console.log('7', deleteResponse.loading);
    if (createResponse.error) console.log('3', createResponse.error);
    if (updateResponse.error) console.log('4', updateResponse.error);
    if (deleteResponse.error) console.log('8', deleteResponse.error);
    if (createResponse.data) console.log('5', createResponse.data);
    if (updateResponse.data) console.log('6', updateResponse.data);
    if (deleteResponse.data) console.log('9', deleteResponse.data);

    return <IngredientModal createIngredient={createIngredient} updateIngredient={updateIngredient} deleteIngredient={deleteIngredient} {...props} />

};

export default IngredientModalContainer;