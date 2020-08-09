import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../context';
import axios from 'axios';


const Animation = posed.div({
    visible: {
        opacity: 1,
        applyAtStart : {
            display: "block"
        }
    },
    hidden: {
        opacity: 0,
        applyAtEnd: {
            display : "none"
        }
    }
});

class AddUser extends Component {
    state = {
        visible: false,
        name:"",
        age:"",
        title:""
    }
    changeVisibility = (e) => {
        this.setState({
            visible: !this.state.visible
        })
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    // changeName =(e)=> {
    //     this.setState({
    //         name : e.target.value
    //     })
    // }

    
    // changeAge =(e)=> {
    //     this.setState({
    //         age: e.target.value
    //     })
    // }

    
    // changeTitle =(e)=> {
    //     this.setState({
    //         title: e.target.value
    //     })
        
    // }

    addUser =  async (dispatch,e) => {
        e.preventDefault();
        const {name,age,title} = this.state;

        const newUser = {
            name,
            age,
            title

        }
        
        const response = await axios.post("http://localhost:3004/users",newUser);

        dispatch({
            type:"ADD_USER",
            payload: response.data
        });

        //redirect 

        this.props.history.push("/");
    }
    render() {
        const{visible,name,age,title} = this.state;

        return <UserConsumer>
            {
                value => {
                    const{dispatch} = value;
                    return (
                        <div className = "col-md-8 mb-4">
            
                    <button onClick = {this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>
                    <Animation pose ={visible ? "visible" :"hidden"}>
                            <div className="card">
                                <div className="card-header">
                                    <h4>Add UserForm</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.addUser.bind(this,dispatch)}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text"
                                        name="name"
                                        id="id"
                                        placeholder="Enter Name!"
                                        className="form-control"
                                        value={name}
                                        onChange={this.changeInput}/>
                                    </div>
                
                                    <div className="form-group">
                                        <label htmlFor="age">Age</label>
                                        <input type="text"
                                        name="age"
                                        id="age"
                                        placeholder="Enter Age!"
                                        className="form-control"
                                        value={age}
                                        onChange={this.changeInput}/>
                                    </div>
            
                                    <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input type="text"
                                        name="title"
                                        id="title"
                                        placeholder="Enter Title!"
                                        className="form-control"
                                        value={title}
                                        onChange={this.changeInput}/>
                                    </div>
            
                                    <button className="btn btn-danger btn-block" type="submit"> Add User </button>
                                
                                </form>
            
                            </div>
                            </Animation>
                        </div>
                    )
                }
            }
        </UserConsumer>
    }
}
export default AddUser;
