import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context'

class User extends Component {
    state = {
        isVisible : false
    }

    static defaultProps = {
        name : "Bilgi bulunamadı.",
        age: "Bilgi bulunamadı",
        title: "Bilgi bulunamadı."
    }

    // constructor(props){
    //     super(props);
    //     this.onClickEvent = this.onClickEvent.bind(this);
    // }

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         isVisible: false
    //     }
    // }
    
    onClickEvent = (e) => {
        this.setState({
            isVisible:!this.state.isVisible
        })
    }

    onClickDelete =(dispatch,e)=> {
        const{id}= this.props;
        //Consumer Dispatch

        dispatch({
            type: "DELETE_USER",
            payload:id
        });
    }

    render() {
        //Destructing
        const{name,age,title} = this.props; 
        const{isVisible} = this.state;

        return (
            <UserConsumer>
                {
                    value => {
                        const {dispatch}= value;

            return (
                <div className="col-md-8 mb-4" >
                    <div className="card"style= {isVisible ? {backgroundColor :"#62848d"} : null} >
                        <div className="card-header d-flex justify-content-between">
                            <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
                            <i onClick={this.onClickDelete.bind(this,dispatch)} className="fa fa-trash fa-lg" style={{cursor: "pointer"}}></i>
                        </div>
                    </div>
                    {
                        isVisible ? 
                        <div className="card-body"style= {isVisible ? {backgroundColor :"#62848d"} : null} >
                            <p className="card-text">Yaş : {age}</p>
                            <p className="card-text">Unvan: {title}</p>
                    </div>:null
                    }


                </div>
        )
                    }
                }
            </UserConsumer>
        )

 
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    age : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id:PropTypes.string.isRequired
}
export default User;
