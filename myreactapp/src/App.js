import React, { Component } from 'react';
import Users from './components/Users';
import Navbar from './components/Navbar';
import './App.css';
import AddUser from './components/AddUser';
import Test from "./components/Test";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Test test="deneme"/>
        <Navbar title="User Application"/>
        <hr/>
        <AddUser/>
        <Users/>

      </div>
    )
  }
}

export default App;
