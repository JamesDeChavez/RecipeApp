import { gql } from "apollo-server-express";

export const MUTATION_CREATE_USER = gql`
    mutation CreateUser($username: String, $email: String, $password: String) {
        createUser(username: $username, email: $email, password: $password) {
            _id
            username
            email
            ingredients {
                _id
                name
                brand
                userId
            }
            token
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
            }
        }
    }
`