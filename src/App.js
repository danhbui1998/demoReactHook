import './App.css';
// import {useState} from 'react'
import Todo from './components/Todo/Todo';
import FetchAPI from './components/FetchAPI/FetchAPI'
import Countdown from './components/coundown/Coundown'

import Header from './components/Header/Header';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

function App() {

  return (

    <Router>
          <div className="App">
            <Header/>
            <div className="container" style={{marginTop:'30px'}}>
                <h1>Học ReactJS với Danh</h1>
                <Switch>
                  <Route path="/" exact>
                  </Route>
                  <Route path="/todo">
                    <Todo/>
                  </Route>
                  <Route path="/fetchApi">
                    <FetchAPI/>
                  </Route>
                  <Route path="/countdown">
                    <Countdown/>
                  </Route>
                </Switch>
            </div>
          </div>
    </Router>

  );
}


export default App;
