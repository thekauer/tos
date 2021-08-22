import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import { BrowserRouter as Router,Switch, Route  } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/"><Home/> </Route>
        <Route path="/lobby"><h1>Lobby</h1></Route>
        <Route path="/game"><h1>Game</h1></Route>
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
