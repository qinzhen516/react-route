import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link ,Switch ,Redirect} from "react-router-dom";
import './App.scss';
// import Logo from './logo.svg'
import Day from './components/day';
import Document from './components/document';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            {/* <img src={Logo} alt="logo" /> */}
            <ul className="topnav">
              <li><Link to="/document">文档</Link></li>
              <li><Link to="/day">每日总结</Link></li>
            </ul>
          
            <div className="content">
              <Switch> 
                <Route path="/day" component={Day}></Route>
                <Route path="/document" component={Document}></Route>
                
                <Redirect exact path="/" to="/document" />
                
            </Switch>
            </div>
          
            
        </div>
      </Router>
      
    );
  }
}

export default App;
