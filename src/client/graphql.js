import {
  ApolloLink,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  concat,
} from '@apollo/client';

const  { 
  REACT_APP_ARTSY_AUTH_TOKEN,
  REACT_APP_ARTSY_AUTH_ID,
  REACT_APP_GRAPHQL_HOST,
} = process.env;

const GRAPHQL_HOST = REACT_APP_GRAPHQL_HOST || 'https://metaphysics-staging.artsy.net/v2';

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({ 
    headers: {
      'x-access-token': REACT_APP_ARTSY_AUTH_TOKEN,
      'x-user-id': REACT_APP_ARTSY_AUTH_ID,
    },
  });
  return forward(operation);
});


const httpLink = new HttpLink({ uri: GRAPHQL_HOST })

const client = new ApolloClient({
  link: concat(authLink, httpLink),
  cache: new InMemoryCache(),
})

export default client;