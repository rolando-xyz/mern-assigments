import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
import React, {useState} from 'react';

function App() {
  const [currentMsg, setCurrentMsg] = useState("")
  const [messages, setMessages] = useState([])
  
  const handleNewMessage = (newMessage) => {
    setCurrentMsg(newMessage)
    setMessages([...messages,newMessage])
  }
  return (
    <div className="App">
      <MessageForm user="dave" onNewMessage={handleNewMessage}/>
      <MessageDisplay currentMsg={currentMsg} messages={messages}/>
    </div>
  );
}

export default App;
