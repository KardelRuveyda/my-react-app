import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    
    onClickEvent = (number,e) => {
        console.log(number);
    }

    render() {
        //Destructing
        const{name,age,title} = this.props; 
        const{isVisible} = this.state;

        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                          <h4 className="d-inline" onClick={this.onClickEvent.bind(this,61)}>{name}</h4>
                          <i className="fa fa-trash fa-lg" style={{cursor: "pointer"}}></i>
                    </div>
                </div>
                {
                    isVisible ? 
                    <div className="card-body">
                        <p className="card-text">Yaş : {age}</p>
                        <p className="card-text">Unvan: {title}</p>
                 </div>:null
                }


            </div>
        )
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    age : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
export default User;
