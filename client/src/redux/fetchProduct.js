import { apolloClient } from "../components/ApolloClient";
import { gql } from "@apollo/client";

export const fetchProductItem = (cardId) => {
  return  apolloClient.query({
    query: gql`
        query Product($productId: String!) {
            product(id: $productId) {
                id
                name
                inStock
                gallery
                description
                category
                prices {
                    amount
                    currency {
                        symbol
                        label
                    }
                }
                brand
                attributes {
                    id
                    name
                    type
                    items {
                        id
                        value
                        displayValue
                    }
                }
            }
        }
    `,
    variables: {
      productId: cardId,
    },
  });
};