import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import About from './../About/About';
import Footer from './../Footer/Footer';
import Header from './../Header/Header';
import Sample from './../Sample/Sample';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Switch>
        <Route exact path='/' render={() => <Redirect to={'/about'}/>}/>
        <Route path='/about' render={() => <About/>}/>
        <Route path='/sample' render={() => <Sample/>}/>
        <Route path='*' render={() => <div>404 Not found</div>}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
