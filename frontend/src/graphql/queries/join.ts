import { gql } from "@apollo/client";

export const joinQuery = gql`
    {
        join {
            id
        }
    }
`