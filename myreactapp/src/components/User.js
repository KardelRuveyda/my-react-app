import React, { Component } from 'react'

class User extends Component {
    render() {

        //Destructing

        const{name,age,title} = this.props; 

        return (
            <div>
            <ul>
                <li>İsim: {name}</li>
                <li>Yaş : {age}</li>
                <li>Unvan:{title}</li>
            </ul>
            </div>
        )
    }
}
export default User;
