import { gql } from '@apollo/client';

export const MUTATION_CREATE_POST = gql`
    mutation CreatePost($body: String, $authorId: ID) {
        createPost(body: $body, authorId: $authorId) {
            _id
            body
            authorId
        }
    }
`