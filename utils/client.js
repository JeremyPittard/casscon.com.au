import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: typeof window === "undefined", // set to true for SSR
     link: new HttpLink({
       uri: "http://casscon.local/graphql",
     }),
     cache: new InMemoryCache(),
});

export default client;
