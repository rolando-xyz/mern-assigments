import React from 'react'

const ChildComponent = (props) => {
    const secretMessage = "secret"
  return (
    <fieldset>
        <legend>ChildComponent.jsx</legend>
        <button onClick={() => props.callbackFunction(secretMessage)}>Click</button>
        <button onClick={() => props.callbackFunction("testing")}>Click</button>
    </fieldset>
  )
}

export default ChildComponent