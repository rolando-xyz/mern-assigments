import React, {useState} from 'react'

const MessageForm = (props) => {
    const [message, setMessage] = useState("")
    const [color, setColor] = useState("")

    const handleSubmit =(e) =>{
        e.preventDefault()
        props.onNewMessage({user:props.user, content:message, color:color})
        setMessage("")
        setColor("")
    }

  return (
    <fieldset>
        <legend>MessageForm.jsx</legend>
        <form onSubmit={handleSubmit}>
            <input type="text" name="message" value={message}
            onChange={(e)=>setMessage(e.target.value)}
            placeholder="enter message"
            />
            <input type="text" name="color" value={color}
            onChange={(e)=>setColor(e.target.value)}
            placeholder="enter color"
            />
            <button>Send</button>
        </form>
    </fieldset>
  )
}

export default MessageForm