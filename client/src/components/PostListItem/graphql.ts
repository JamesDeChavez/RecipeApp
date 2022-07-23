import { gql } from '@apollo/client';

export const MUTATION_UPDATE_POST = gql`
    mutation UpdatePost($updatePostId: ID, $body: String, $authorId: ID) {
        updatePost (id: $updatePostId, body: $body, authorId: $authorId) {
            _id
            body
            authorId
        }
    }
`;

export const MUTATION_DELETE_POST = gql`
    mutation DeletePost($deletePostId: ID) {
        deletePost(id: $deletePostId) {
            _id
            body
            authorId
        }
    }
`;