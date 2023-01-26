import { ApolloClient, defaultDataIdFromObject, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache({
    dataIdFromObject: (object) => {
      switch (object.__typename) {
        case "CategoryAll":
          return Math.random();
        default:
          return defaultDataIdFromObject(object);
      }
    },
  }),
});