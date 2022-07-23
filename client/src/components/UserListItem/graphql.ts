import { gql } from '@apollo/client';

export const MUTATION_UPDATE_USER = gql`
    mutation UpdateUser($updateUserId: ID, $firstName: String, $lastName: String) {
        updateUser(id: $updateUserId, firstName: $firstName, lastName: $lastName) {
            _id
            firstName
            lastName
        }
    }
`;

export const MUTATION_DELETE_USER = gql`
    mutation DeleteUser($deleteUserId: ID) {
        deleteUser(id: $deleteUserId) {
          _id
          firstName
          lastName
        }
      }
`;