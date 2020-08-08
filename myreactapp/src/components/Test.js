import React, { Component } from 'react'

class Test extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            a:10
        }

        console.log("Constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        //Api isttekleri

        this.setState({
            a: 20
        })
    }
    render() {
        console.log("Render")
        return (
            <div>
                
            </div>
        )
    }
}
export default Test;
