import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HeaderForm from "./components/HeaderForm";
import People from "./views/People";
import Planet from "./views/Planet";

function App() {
  return (
    <BrowserRouter>
      <h1>Luke API Walker</h1>
      <HeaderForm/>

      <Switch>
        <Route path="/planets/:id">
          <Planet />
        </Route>
        <Route path="/people/:id">
          <People />
        </Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
