import { gql } from '@apollo/client';

export const MUTATION_CREATE_USER = gql`
    mutation CreateUser($firstName: String, $lastName: String) {
        createUser(firstName: $firstName, lastName: $lastName) {
            _id
            firstName
            lastName
        }
    }
`;