import { gql } from '@apollo/client';

export const QUERY_USER_LIST = gql`
    query GetAllUsers {
        getAllUsers {
            _id
            firstName
            lastName
        }
    }
`;