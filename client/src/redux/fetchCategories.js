import { apolloClient } from "../components/ApolloClient";
import { gql } from "@apollo/client";

export const fetchCategories = () => {
  return apolloClient.query({
    query: gql`
        query Categories {
            categories {
                name
                products {
                    id
                    name
                    category
                    prices {
                        currency {
                            symbol
                            label
                        }
                        amount
                    }
                    brand
                    attributes {
                        items {
                            id
                            value
                            displayValue
                        }
                        id
                        name
                        type
                    }
                    inStock
                    gallery
                    description
                }
            }
        }
    `
  });
};
