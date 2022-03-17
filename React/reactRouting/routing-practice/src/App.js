import React from 'react'
import { BrowserRouter, Switch, Route,} from 'react-router-dom'
import Router from './components/Router'

function App() {
  const About = (props) => {
    return(
      <fieldset>
        <legend>About</legend>
      </fieldset>
    )
  }

  const Home = (props) => {
    return(
      <fieldset>
        <legend>Home</legend>
      </fieldset>
    )
  }
  
  return (
    <BrowserRouter>
      <Switch>
        
        <Route path="/search/:keyword">
          <Router />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
