import {BrowserRouter, Switch, Route} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import form from "./components/form";
import OneProduct from "./components/OneProduct";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <form/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
        <Route exact path="/product/:id">
          <OneProduct/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
