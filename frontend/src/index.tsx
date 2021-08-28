import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import { BrowserRouter as Router,Switch, Route  } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route path="/"><Home/> </Route>
        <Route path="/lobby"><h1>Lobby</h1></Route>
        <Route path="/game"><h1>Game</h1></Route>
    </Switch>
    </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
