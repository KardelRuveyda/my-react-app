import React, { Component } from 'react'
import UserConsumer from '../context';
import axios from 'axios';



class UpdateUser extends Component {
    state = {
        name:"",
        age:"",
        title:""
    }


    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    componentDidMount = async () => {
        const {id}= this.props.match.params;

        const response = await axios.get(`http://localhost:3004/users/${id}`);
        
        const {name,age,title} = response.data;

        this.setState({
            name,
            age,
            title
        }); 
    }


    updateUser =  async (dispatch,e) => {
        e.preventDefault();

    }
    render() {
        const{visible,name,age,title} = this.state;

        return <UserConsumer>
            {
                value => {
                    const{dispatch} = value;
                    return (
                        <div className = "col-md-8 mb-4">
            
                            <div className="card">
                                <div className="card-header">
                                    <h4>Update UserForm</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.updateUser.bind(this,dispatch)}>
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
            
                                    <button className="btn btn-danger btn-block" type="submit"> Update User </button>
                                
                                </form>
            
                            </div>
                        </div>
                    )
                }
            }
        </UserConsumer>
    }
}
export default UpdateUser;
