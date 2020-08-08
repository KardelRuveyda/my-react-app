import React,{Component} from "react";


const UserContext = React.createContext();
//Provider, Consumer (Sağlayıcı Tüketici)

const reducer = (state,action) => {
    switch(action.type){
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        case "ADD_USER":
            return {
                ...state,
                users : [...state.users,action.payload]
            }
        default:
            return state 
    }
}

export  class UserProvider extends Component {
    state = {
        users: [
          {
            id:"unique-1",
            name: "Kardel Rüveyda Çetin",
            age :"25",
            title:"Yazılım Uzmanı"
          },
          {
            id:"unique-2",
            name: "Orhancan Çetin",
            age :"17",
            title:"Öğrenci"  
          },
          {
            id:"unique-3",
            name: "Mehmet Eymen Küçükali",
            age :"10",
            title:"Öğrenci"
          }
        ],

        dispatch : action => {
            this.setState(state => reducer(state,action))
        }
      }
    
    render() {
        return (
          <UserContext.Provider value={this.state}> 
            {this.props.children}  
          </UserContext.Provider>  
        )
    }
}

const userConsumer = UserContext.Consumer;

export default userConsumer;
