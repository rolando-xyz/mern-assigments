import React, { Component } from 'react'

export default class Hello extends Component {
  render() {
    const {tasks} = this.props
    return (
      <div>
          <h1>Hello Dojo</h1>
          <h1>Things I need to do: {tasks}</h1>
      </div>
    )
  }
}
