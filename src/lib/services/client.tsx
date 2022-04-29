import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { createUploadLink } from "apollo-upload-client";

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://graphql.anilist.co/",
  // link: createUploadLink({
  //   uri: "https://graphql.anilist.co/",
  // }),
});
