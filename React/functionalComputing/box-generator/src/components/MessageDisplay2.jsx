import React from 'react'

const MessageDisplay2 = (props) => {
  return (
    <fieldset>
        <legend>MessageDisplay2.jsx</legend>
        {
            props.messages.map((message, i)=>{
                return (
                    <p key={i} style={{color: message.textColor}}> {message.user} : {message.content}</p>
                )
            })
        }
    </fieldset>
  )
}

export default MessageDisplay2