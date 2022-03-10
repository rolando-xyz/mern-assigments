import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Hello tasks={["Learn React","Climb Mt. Everest","Run a marathon","Feed the dogs"]}/>
    </div>
  );
}

export default App;
