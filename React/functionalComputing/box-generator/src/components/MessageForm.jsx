import React, {useState} from 'react'

const MessageForm = (props) => {
    const [message,setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onNewMessage(message)
        setMessage("")
    }

  return (
    <fieldset>
        <legend>MessageForm.jsx</legend>
        <form onSubmit={handleSubmit}>
            <input type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="please enter message" />
            <button>Send</button>
        </form>
    </fieldset>
  )
}

export default MessageForm