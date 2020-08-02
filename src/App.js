import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

import './App.scss';

import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Grid from './components/shows/Grid';
import Header from './components/Header';
import Show from './components/shows/Show';

import shows from './shows.json'

function App() {
  return (
    <HashRouter>
      <div>
        <Header/>
        <div className="page-container">
          <Switch>
            <Route exact path="/">
              <Grid showsData={shows}/>
            </Route>
            <Route path="/show/:id" children={<Show shows={shows}/>}/>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
