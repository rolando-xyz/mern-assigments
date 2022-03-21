import React from 'react'

const MessageDisplay = (props) => {
  return (
    <fieldset>
        <legend>MessageDisplay.jsx</legend>
        {
            props.messages.map((message, i)=>{
                return (
                    <p key={i} style={{backgroundColor: message.color}} >{message.user}:{message.content}</p>
                )
            })
        }
    </fieldset>
  )
}

export default MessageDisplay