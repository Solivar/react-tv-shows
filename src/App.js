import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.scss';

import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Grid from './components/shows/Grid';
import Header from './components/Header';
import Show from './components/shows/Show';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <div className="page-container">
          <Switch>
            <Route exact path="/">
              <Grid/>
            </Route>
            <Route path="/show/:id" children={<Show/>} />
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
