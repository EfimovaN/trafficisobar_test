import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sample from './components/Sample/Sample';

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
