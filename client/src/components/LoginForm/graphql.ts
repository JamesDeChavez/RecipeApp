import { gql } from "apollo-server-express";

export const MUTATION_LOGIN_USER = gql`
  mutation LoginUser($username: String, $password: String) {
    loginUser(username: $username, password: $password) {
      _id
      username
      email
      ingredients {
        _id
        name
        brand
        userId
      }
      recipes {
        _id
        title
        video {
          title
          thumbnail
          channel
          youtubeId
        }
        ingredients {
          _id
          name
          brand
          userId
        }
        instructions {
          summary {
            action
            items
          }
          description
          ingredients {
            name
            amount
          }
          time
        }
        userId
      }
      token
    }
  }
`;
