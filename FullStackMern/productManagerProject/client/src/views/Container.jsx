import React, { Component } from 'react'
import CreateProduct from '../components/CreateProduct'
import Dashboard from '../components/Dashboard'

export class Container extends Component {
  render() {
    return (
      <fieldset>
          {this.props.children}
          <CreateProduct />
          <Dashboard />
      </fieldset>
    )
  }
}

export default Container