import React, { Component } from 'react';
import User from './components/User';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component{
  render(){
    const test=61;
    const isAuth=true;
    return(
      <div className="App">
        <Navbar title = "User Application"/>
        <hr/>
        <User
          name="Kardel Rüveyda Çetin"
          age= "25"
          title ="Yazılım Uzmanı"
        />
        
        <User
          name="Orhancan Çetin"
          age= "17"
          title ="Öğrenci"
        />
      </div>
    )
  }
}

export default App;
