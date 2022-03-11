import React, { Component } from 'react'

export class States extends Component {
    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }

    handleDecrementCount =()=>{
        this.setState({count:this.state.count-1})
    }

    render() {
        return (
            <div>
                <h1> States</h1>
                <h2> Alert </h2>
                <button onClick={() => alert("hi")}> Alert me!</button>
                <h2> State: count: {this.state.count} </h2>
                <button onClick={()=>this.setState({count: this.state.count+1})}> Increment count</button>
                <button onClick={this.handleDecrementCount}> Decrement count</button>

            </div>
        )
    }
}

export default States