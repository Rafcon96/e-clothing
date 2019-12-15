import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homePage/homePage';


import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATs PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
    <Switch>
     <Route exact path='/' component={HomePage} />
     <Route  path='/hats' component={HatsPage} />
    </Switch>
    </div>
  );
}

export default App;
