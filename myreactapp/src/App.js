import React, { Component } from 'react';
import Users from './components/Users';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component{
  state = {
    users: [
      {
        id:"1",
        name: "Kardel Rüveyda Çetin",
        age :"25",
        title:"Yazılım Uzmanı"
      },
      {
        id:"2",
        name: "Orhancan Çetin",
        age :"17",
        title:"Öğrenci"  
      },
      {
        id:"3",
        name: "Mehmet Eymen Küçükali",
        age :"10",
        title:"Öğrenci"
      }
    ]
  }

  deleteUser = (id) => {
    this.setState({
      users : this.state.users.filter(user => id!== user.id)
    })
  }

  render(){
    return(
      <div className="App">
        <Navbar title="User Application"/>
        <hr/>
        
        <Users deleteUser={this.deleteUser} users = {this.state.users}/>

      </div>
    )
  }
}

export default App;
