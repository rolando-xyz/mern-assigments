import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const parentFunction =(secret) => {
        alert("parent function alert:" + secret)
    }

  return (
    <fieldset>
        <legend>ParentComponent.jsx</legend>
        <ChildComponent callbackFunction={parentFunction}/>
    </fieldset>
  )
}

export default ParentComponent