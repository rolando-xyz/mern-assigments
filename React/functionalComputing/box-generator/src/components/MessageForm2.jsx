import React, {useState} from 'react'

const MessageForm2 = (props) => {
    const [message,setMessage] = useState("")
    const [textColor,setTextColor] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onNewMessage({user: props.user, content: message, textColor: textColor})
        setMessage("")
        setTextColor("")
    }

  return (
    <fieldset>
        <legend>MessageForm.jsx</legend>
        <form onSubmit={handleSubmit}>
            <input type="text" name="message" value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="enter message"/>
            <input type="text" name="textColor" value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                placeholder="enter color"/>
            <button>Send</button>
        </form>
    </fieldset>
  )
}

export default MessageForm2