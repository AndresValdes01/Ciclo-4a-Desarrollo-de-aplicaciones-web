//import logo from './logo.svg';
//import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import 'styles/globals.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>

    </ApolloProvider>
  );
}

export default App;
