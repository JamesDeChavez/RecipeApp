import { gql } from '@apollo/client';

export const QUERY_POST_LIST = gql`
    query GetAllPosts{
        getAllPosts {
            _id
            body
            authorId
        }
    }
`;