import React, { Component } from 'react';
import Users from './components/Users';
import Navbar from './layout/Navbar';
import './App.css';
import AddUser from './forms/AddUser';
import UpdateUser from './forms/UpdateUser';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Contribute from './pages/Contribute';

const Home = ()  =>{
  return(
    <h3>Home Page</h3>
  )
}

const About = ()  =>{
  return(
    <h3>About Page</h3>
  )
}

class App extends Component{
  render(){
    return(
      <Router>
        <div className="container">
        <Navbar title="User Application"/>
        <hr/>
        <Switch>
          <Route exact path = "/" component = {Users}/>
          <Route exact path = "/add" component = {AddUser}/>
          <Route exact path ="/github" component={Contribute} />
          <Route exact path="/edit/:id" component = {UpdateUser}/>
          <Route exact component={NotFound}/>

        
        </Switch>


        </div>
      </Router>

    )
  }
}

export default App;
