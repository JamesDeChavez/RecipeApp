import { gql } from "apollo-server-express";

export const QUERY_VIEWER = gql`
    query Viewer {
        viewer {
            _id
            username
            email
            ingredients {
                _id
                name
                brand
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