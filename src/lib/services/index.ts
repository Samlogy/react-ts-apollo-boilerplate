import { gql } from "@apollo/client";

// example
export const GET_ALL_PRODUCTS = gql`
  query Query {
    products {
      name
      description
      quantity
      id
    }
  }
`;
