import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Home from '../src/component/home'; 
import Task from '../src/component/task'; 
import User from '../src/component/user'; 
import './App.css'; 
  
class App extends Component { 
  
  render() { 
    
    return ( 
       <Router> 
           <div className="App"> 
            <ul className="App-header"> 
              <li> 
                LOGO
              </li>
              <li> 
                <Link to="/">Home</Link> 
              </li> 
              <li> 
                <Link to="/task">Task</Link> 
              </li> 
              <li> 
                <Link to="/user">User</Link> 
              </li> 
            </ul> 
            <Switch> 
              <Route exact path='/' component={Home}></Route> 
              <Route exact path='/task' component={Task}></Route> 
              <Route exact path='/user' component={User}></Route> 
            </Switch> 
          </div> 
       </Router> 
   ); 
  } 
} 
  
export default App; 