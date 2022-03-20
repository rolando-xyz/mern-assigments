import React,{useState} from 'react'
import MessageDisplay2 from "./components/MessageDisplay2"
import MessageForm2 from "./components/MessageForm2"
import ParentComponent from './components/ParentComponent'

function App() {
  const [currentMsg, setCurrentMsg] = useState("")
  const [messages, setMessages] = useState("")
  const handleNewMessage = (newMessage) => {
    setCurrentMsg(newMessage)
    setMessages([...messages, newMessage])
  }

  return (
    <div className="App">
      {<ParentComponent/>}
      <MessageForm2 user="john" onNewMessage={handleNewMessage}/>
      <MessageForm2 user="dave" onNewMessage={handleNewMessage}/>
      <MessageDisplay2 currentMsg={currentMsg} messages={messages}/>
    </div>
  );
}

export default App;
