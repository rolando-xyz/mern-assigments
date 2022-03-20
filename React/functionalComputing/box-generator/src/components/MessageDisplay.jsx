import React from 'react'

const MessageDisplay = (props) => {
  return (
    <fieldset>
        <legend>MessageDisplay.jsx</legend>
        <p> {props.currentMsg}</p>
        {
            props.messages.map((message, i)=>{
                return (
                    <p key={i}>{message}</p>
                )
            })
        }
    </fieldset>
  )
}

export default MessageDisplay