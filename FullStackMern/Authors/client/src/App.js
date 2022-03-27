import {BrowserRouter, Switch, Route} from "react-router-dom"
import CreateAuthor from "./components/CreateAuthor";
import Dashboard from "./components/Dashboard";
import EditJob from "./components/EditJob";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <h1>Authors</h1>
        <Switch>
          <Route exact path="/authors/new">
            <CreateAuthor/>
          </Route>
          <Route exact path="/">
            <Dashboard/>
          </Route>
          
          <Route exact path="/authors/edit/:id">
            <EditJob/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;