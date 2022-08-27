import { gql } from "apollo-server-express";

export const MUTATION_CREATE_INGREDIENT = gql`
    mutation CREATE_INGREDIENT($name: String, $brand: String, $userId: ID) {
        createIngredient(name: $name, brand: $brand, userId: $userId) {
            _id
            name
            brand
        }
    }
`

export const MUTATION_UPDATE_INGREDIENT = gql`
    mutation UpdateIngredient($updateIngredientId: ID, $name: String, $brand: String) {
        updateIngredient(id: $updateIngredientId, name: $name, brand: $brand) {
            name
            brand
        }
    }
`

export const MUTATION_DELETE_INGREDIENT = gql`
    mutation DeleteIngredient($deleteIngredientId: ID) {
        deleteIngredient(id: $deleteIngredientId) {
            _id
            name
        }
    }
`

