import React, { Component } from 'react'

export default class PersonCard extends Component {
  
  render() {
    const {firstName, lastName, age, color} = this.props
    
    
    return (
    <div>
        <div>
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <p>Age: {this.props.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
        </div>
    </div>
    )
  }
}
