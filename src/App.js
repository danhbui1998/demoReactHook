import './App.css';
// import {useState} from 'react'
import Todo from './components/Todo/Todo';
import FetchAPI from './components/FetchAPI/FetchAPI'
import Countdown from './components/coundown/Coundown'
import Blog from './components/Blog/Blog'
import DetailBlog from './components/Blog/DetailBlog'
import AddNewBlog from './components/Blog/AddNewBlog';
import NotFound from './components/404NotFound/404NotFound'

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
                <Switch>
                  <Route path="/" exact>
                  </Route>
                  <Route path="/todo" exact>
                    <Todo/>
                  </Route>
                  <Route path="/fetchApi" exact>
                    <FetchAPI/>
                  </Route>
                  <Route path="/countdown" exact>
                    <Countdown/>
                  </Route>
                  <Route path="/blog" exact>
                    <Blog/>
                  </Route>
                  <Route path="/blog/:id" exact>
                    <DetailBlog/>
                  </Route>
                  <Route path="/add-new-blog" exact>
                    <AddNewBlog/>
                  </Route>
                  <Route path="*">
                    <NotFound/>
                  </Route>
                </Switch>
            </div>
          </div>
    </Router>

  );
}


export default App;
