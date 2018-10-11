import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './pages/App';

import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from 'react-apollo'

import registerServiceWorker from './registerServiceWorker';
import history from './utils/history';

import './styles/index.css';


const httpLink = createHttpLink({
  uri: 'http://localhost:8080/graphql'
  // uri: 'http://localhost:4000'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

const MainApp = (
  <ApolloProvider client={client}>
    <Router history={history}>
      <App />
    </Router>
  </ApolloProvider>
)

ReactDOM.render(
  MainApp,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
