import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="rolando" lastName="gomez" age={33} hairColor="brown" />
      <PersonCard firstName="Jane" lastName="Doe" age={44} hairColor="black" />
      <PersonCard firstName="Millard" lastName="Fillmore" age={55} hairColor="black" />
    </div>
  );
}

export default App;
