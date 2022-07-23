import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    posts: [Post]
  }

  type Post {
    _id: ID
    body: String
    authorId: String
  }

  type Query {
    getAllUsers: [User]
    getUserById(id: ID): User
    getAllPosts: [Post]
    getPostById(id: ID): Post
  }

  type Mutation {
    createUser(firstName: String, lastName: String): User
    createPost(body: String, authorId: ID): Post
    updateUser(id: ID, firstName: String, lastName: String): User
    updatePost(id: ID, body: String, authorId: ID): Post
    deleteUser(id: ID): User
    deletePost(id: ID): Post
  }
`;

export default typeDefs;