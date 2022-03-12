import React, { Component } from 'react'

export default class PersonCard extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      age: this.props.age
    }
  }

  incrementAge =() => {
    this.setState({age: this.state.age += 1})
  }

  decrementAge =() => {
    this.setState({age: this.state.age - 1})
  }

  render() {
    const {firstName, lastName, hairColor} = this.props
    
  
    return (
    <div>
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={this.incrementAge}>Increment</button>
            <button onClick={this.decrementAge}>dncrement</button>
        </div>
    </div>
    )
  }
}
