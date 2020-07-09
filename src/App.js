import React from 'react';
import './App.scss';

import Footer from './components/Footer';
import Grid from './components/shows-grid/Grid';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <div className="page-container">
        <Grid/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
