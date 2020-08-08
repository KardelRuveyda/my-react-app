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

    componentDidUpdate = (prevProps,prevStage) => {
        console.log("componentDidUpdate");

    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
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
